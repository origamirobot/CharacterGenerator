using System;
using System.Web.Mvc;
using CharGen.Data.Models;
using CharGen.Data.Repositories;

namespace CharGen.Web.Controllers
{

	/// <summary>
	/// 
	/// </summary>
	public class EquipmentController : Controller
    {

	    #region PRIVATE PROPERTIES


		/// <summary>
		/// Gets the equipment repository.
		/// </summary>
		protected IEquipmentRepository EquipmentRepository { get; private set; }

		/// <summary>
		/// Gets the equipment type repository.
		/// </summary>
		protected IEquipmentTypeRepository EquipmentTypeRepository { get; private set; }


		#endregion PRIVATE PROPERTIES

		#region CONSTRUCTORS


		/// <summary>
		/// Initializes a new instance of the <see cref="EquipmentController" /> class.
		/// </summary>
		/// <param name="equipmentRepository">The equipment repository.</param>
		/// <param name="equipmentTypeRepository">The equipment type repository.</param>
		public EquipmentController(
			IEquipmentRepository equipmentRepository, 
			IEquipmentTypeRepository equipmentTypeRepository)
		{
			EquipmentRepository = equipmentRepository;
			EquipmentTypeRepository = equipmentTypeRepository;
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
				var list = EquipmentRepository.List();
				return Json(list, JsonRequestBehavior.AllowGet);
			}
			catch (Exception ex)
			{
				return Json(new { Success = false }, JsonRequestBehavior.AllowGet);
			}
		}

		/// <summary>
		/// Lists the equipment types.
		/// </summary>
		/// <returns></returns>
		public ActionResult ListTypes()
		{
			try
			{
				var list = EquipmentTypeRepository.List();
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
		/// <param name="equipment">The armor.</param>
		/// <returns></returns>
		public ActionResult Save(Equipment equipment)
		{
			try
			{
				var typeId = Int32.Parse(Request.Form["TypeId"]);
				equipment.Type = EquipmentTypeRepository.Retrieve(typeId);

				EquipmentRepository.Save(equipment);
				EquipmentRepository.Session.Flush();
				return Json(new { Success = true, Message = "Equipment saved successfully" }, JsonRequestBehavior.AllowGet);
			}
			catch (Exception ex)
			{
				return Json(new { Success = false, Message = ex.Message }, JsonRequestBehavior.AllowGet);
			}
		}



		#endregion ACTION METHODS


    }


}
