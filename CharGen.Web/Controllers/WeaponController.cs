using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using CharGen.Data.Repositories;

namespace CharGen.Web.Controllers
{
	/// <summary>
	/// 
	/// </summary>
    public class WeaponController : Controller
    {
	    #region PRIVATE PROPERTIES

		/// <summary>
		/// Gets the weapon repository.
		/// </summary>
		protected IWeaponRepository WeaponRepository { get; private set; }

		#endregion PRIVATE PROPERTIES

		#region CONSTRUCTORS


		/// <summary>
		/// Initializes a new instance of the <see cref="WeaponController"/> class.
		/// </summary>
		/// <param name="weaponRepository">The weapon repository.</param>
		public WeaponController(IWeaponRepository weaponRepository)
		{
			WeaponRepository = weaponRepository;
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
				var weapons = WeaponRepository.List();
				return Json(weapons, JsonRequestBehavior.AllowGet);
			}
			catch (Exception ex)
			{
				return Json(new {Success = false}, JsonRequestBehavior.AllowGet);
			}
		}



		#endregion ACTION METHODS


    }
}
