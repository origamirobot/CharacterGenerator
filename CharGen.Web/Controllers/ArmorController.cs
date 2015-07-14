using System;
using System.Web.Mvc;
using CharGen.Data.Models;
using CharGen.Data.Repositories;

namespace CharGen.Web.Controllers
{

	/// <summary>
	/// 
	/// </summary>
	public class ArmorController : Controller
    {

	    #region PRIVATE PROPERTIES


		/// <summary>
		/// Gets the armor repository.
		/// </summary>
		protected IArmorRepository ArmorRepository { get; private set; }

		/// <summary>
		/// Gets the armor type repository.
		/// </summary>
		protected IArmorTypeRepository ArmorTypeRepository { get; private set; }

		/// <summary>
		/// Gets the armor availability repository.
		/// </summary>
		protected IArmorAvailabilityRepository ArmorAvailabilityRepository { get; private set; }


		#endregion PRIVATE PROPERTIES

		#region CONSTRUCTORS


		/// <summary>
		/// Initializes a new instance of the <see cref="ArmorController" /> class.
		/// </summary>
		/// <param name="armorRepository">The armor repository.</param>
		/// <param name="armorTypeRepository">The armor type repository.</param>
		/// <param name="armorAvailabilityRepository">The armor availability repository.</param>
		public ArmorController(
			IArmorRepository armorRepository, 
			IArmorTypeRepository armorTypeRepository, 
			IArmorAvailabilityRepository armorAvailabilityRepository)
		{
			ArmorRepository = armorRepository;
			ArmorTypeRepository = armorTypeRepository;
			ArmorAvailabilityRepository = armorAvailabilityRepository;
		}

		#endregion CONSTRUCTORS

		#region ACTION METHODS


		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public ActionResult List()
		{
			try
			{
				var list = ArmorRepository.List();
				return Json(list, JsonRequestBehavior.AllowGet);
			}
			catch (Exception ex)
			{
				return Json(new { Success = false }, JsonRequestBehavior.AllowGet);
			}
		}


		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public ActionResult ListTypes()
		{
			try
			{
				var list = ArmorTypeRepository.List();
				return Json(list, JsonRequestBehavior.AllowGet);
			}
			catch (Exception ex)
			{
				return Json(new { Success = false }, JsonRequestBehavior.AllowGet);
			}
		}

		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public ActionResult ListAvailabilities()
		{
			try
			{
				var list = ArmorAvailabilityRepository.List();
				return Json(list, JsonRequestBehavior.AllowGet);
			}
			catch (Exception ex)
			{
				return Json(new { Success = false }, JsonRequestBehavior.AllowGet);
			}
		}

		/// <summary>
		/// Saves the specified armor.
		/// </summary>
		/// <param name="armor">The armor.</param>
		/// <returns></returns>
		public ActionResult Save(Armor armor)
		{
			try
			{
				var typeId =  Int32.Parse(Request.Form["TypeId"]);
				var availId = Int32.Parse(Request.Form["AvailabilityId"]);

				armor.Type = ArmorTypeRepository.Retrieve(typeId);
				armor.Availability = ArmorAvailabilityRepository.Retrieve(availId);

				ArmorRepository.Save(armor);
				ArmorRepository.Session.Flush();
				return Json(new { Success = true, Message = "Armor saved successfully" }, JsonRequestBehavior.AllowGet);
			}
			catch(Exception ex)
			{
				return Json(new { Success = false, Message = ex.Message }, JsonRequestBehavior.AllowGet);
			}
		}


		#endregion ACTION METHODS


    }


}
