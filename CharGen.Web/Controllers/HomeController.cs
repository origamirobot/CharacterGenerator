using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CharGen.Web.Controllers
{
    public class HomeController : Controller
    {

		/// <summary>
		/// Indexes this instance.
		/// </summary>
		/// <returns></returns>
        public ActionResult Index()
        {
            return View();
        }

    }
}
