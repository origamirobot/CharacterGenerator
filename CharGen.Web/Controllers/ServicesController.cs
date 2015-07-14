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
    public class ServicesController : Controller
    {

	    #region PRIVATE PROPERTIES


		/// <summary>
		/// Gets the weapon repository.
		/// </summary>
		protected IServiceRepository ServiceRepository { get; private set; }


		#endregion PRIVATE PROPERTIES

		#region CONSTRUCTORS


		/// <summary>
		/// Initializes a new instance of the <see cref="ServicesController"/> class.
		/// </summary>
		/// <param name="repository">The service repository.</param>
		public ServicesController(IServiceRepository repository)
		{
			ServiceRepository = repository;
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
				var list = ServiceRepository.List();
				return Json(list, JsonRequestBehavior.AllowGet);
			}
			catch (Exception ex)
			{
				return Json(new {Success = false}, JsonRequestBehavior.AllowGet);
			}
		}



		#endregion ACTION METHODS


    }
}
