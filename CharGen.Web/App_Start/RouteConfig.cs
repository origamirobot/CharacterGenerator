using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace CharGen.Web
{
	public class RouteConfig
	{
		public static void RegisterRoutes(RouteCollection routes)
		{
			routes.IgnoreRoute("{resource}.axd/{*pathInfo}");


			routes.MapRoute("Balance", "utg/balance", new { controller = "Utg", action = "CardBalance" });
			routes.MapRoute("AddFunds", "utg/add-funds", new { controller = "Utg", action = "CardBalance" });
			routes.MapRoute("Activate", "utg/activate", new { controller = "Utg", action = "ActivateCard" });
			routes.MapRoute("Deactivate", "utg/deactivate", new { controller = "Utg", action = "DeactivateCard" });
			routes.MapRoute("Reactivate", "utg/reactivate", new { controller = "Utg", action = "ReactivateCard" });
			routes.MapRoute("Home", "", new { controller = "Home", action = "Index" });
			routes.MapRoute("Default", "{param1}/{param2}/{param3}/{param4}/{param5}", new { controller = "Home", action = "Index", param1 = UrlParameter.Optional, param2 = UrlParameter.Optional, param3 = UrlParameter.Optional, param4 = UrlParameter.Optional, param5 = UrlParameter.Optional }, new[] { "Demeter.Controllers" });

		}
	}
}