using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using CharGen.Data.Models;
using CharGen.Data.Repositories;

namespace CharGen.Web.Controllers
{

	/// <summary>
	/// 
	/// </summary>
    public class SpeciesController : Controller
    {

	    #region PRIVATE PROPERTIES


		/// <summary>
		/// Gets the species repository.
		/// </summary>
		protected ISpeciesRepository SpeciesRepository { get; private set; }

		/// <summary>
		/// Gets the age repository.
		/// </summary>
		protected IAgeRepository AgeRepository { get; private set; }


		#endregion PRIVATE PROPERTIES

		#region CONSTRUCTORS


		/// <summary>
		/// Initializes a new instance of the <see cref="SpeciesController" /> class.
		/// </summary>
		/// <param name="speciesRepository">The species repository.</param>
		/// <param name="ageRepository">The age repository.</param>
		public SpeciesController(
			ISpeciesRepository speciesRepository, 
			IAgeRepository ageRepository)
		{
			SpeciesRepository = speciesRepository;
			AgeRepository = ageRepository;
		}


	    #endregion CONSTRUCTORS

		#region ACTION METHODS


		/// <summary>
		/// Lists this instance.
		/// </summary>
		/// <returns></returns>
		public ActionResult List()
		{
			try
			{
				var species = SpeciesRepository.List();
				return Json(species, JsonRequestBehavior.AllowGet);
			}
			catch (Exception ex)
			{
				return Json(new { Success = false, Message = ex.Message }, JsonRequestBehavior.AllowGet);
			}
		}

		/// <summary>
		/// Gets the age range a particular species falls into.
		/// </summary>
		/// <param name="speciesId">The species identifier.</param>
		/// <param name="age">The age.</param>
		/// <returns></returns>
		public ActionResult GetAgeRange(int speciesId, int age)
		{
			try
			{
				var range = AgeRepository.List().FirstOrDefault(x => x.Species.Id == speciesId && x.LowAge <= age && x.HighAge >= age);
				if (range == null)
					return Json(new { Success = true, AgeRange = "Unknown" }, JsonRequestBehavior.AllowGet);
				return Json(new { Success = true, AgeRange = String.Format("{0} {1}", range.Name, range.Species)  }, JsonRequestBehavior.AllowGet);
			}
			catch(Exception ex)
			{
				return Json(new { Success = false, Message = ex.Message }, JsonRequestBehavior.AllowGet);
			}
		}

		/// <summary>
		/// 
		/// </summary>
		/// <param name="species"></param>
		/// <returns></returns>
		[HttpPost]
		public ActionResult Save(Species species)
		{
			try
			{
				SpeciesRepository.Save(species);
				SpeciesRepository.Session.Flush();
				return Json(new { Success = true, Message = "Species saved successfully" }, JsonRequestBehavior.AllowGet);
			}
			catch (Exception ex)
			{
				return Json(new { Success = false, Message = ex.Message }, JsonRequestBehavior.AllowGet);
			}
		}

		#endregion ACTION METHODS

	}
}
