using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using CharGen.Data.Models;
using CharGen.Data.Repositories;

namespace CharGen.Web.Controllers
{
    public class SkillController : Controller
    {

	    #region PRIVATE PROPERTIES


		/// <summary>
		/// Gets the class repository.
		/// </summary>
		protected IClassRepository ClassRepository { get; private set; }

		/// <summary>
		/// Gets the skill repository.
		/// </summary>
		protected ISkillRepository SkillRepository { get; private set; }


		#endregion PRIVATE PROPERTIES

		#region CONSTRUCTORS


		/// <summary>
		/// Initializes a new instance of the <see cref="SpeciesController" /> class.
		/// </summary>
		/// <param name="classRepository">The class repository.</param>
		/// <param name="skillRepository">The skill repository.</param>
		public SkillController(
			IClassRepository classRepository, 
			ISkillRepository skillRepository)
		{
			SkillRepository = skillRepository;
			ClassRepository = classRepository;
		}


	    #endregion CONSTRUCTORS

		#region ACTION METHODS


		/// <summary>
		/// Lists this instance.
		/// </summary>
		/// <returns></returns>
		public ActionResult List(int classId)
		{
			try
			{
				var list = SkillRepository.List().Where(skill => skill.Classes.Any(@class => @class.Id == classId)).ToList();
				return Json(list.Select(x => new { x.ArmorCheckPenalty, x.Description, x.Name, x.UseUntrained, x.Id, x.KeyAbility}), JsonRequestBehavior.AllowGet);
			}
			catch (Exception ex)
			{
				return Json(new { Success = false, Message = ex.Message }, JsonRequestBehavior.AllowGet);
			}
		}



		#endregion ACTION METHODS

	}
}
