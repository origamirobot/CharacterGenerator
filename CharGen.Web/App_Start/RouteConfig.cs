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


			routes.MapRoute("GetModifier", "abilities/modifier", new { controller = "Abilities", action = "GetModifier" });
			routes.MapRoute("GetModifiers", "abilities/modifiers", new { controller = "Abilities", action = "GetModifiers" });
			routes.MapRoute("GetSpecies", "species/list", new { controller = "Species", action = "List" });
			routes.MapRoute("GetEquipment", "equipment/list", new { controller = "Gear", action = "EquipmentList" });
			routes.MapRoute("GetWeapons", "weapons/list", new { controller = "Weapon", action = "List" });
			routes.MapRoute("GetServices", "services/list", new { controller = "Gear", action = "ServicesList" });
			routes.MapRoute("Home", "", new { controller = "Home", action = "Index" });
			routes.MapRoute("Default", "{param1}/{param2}/{param3}/{param4}/{param5}", new { controller = "Home", action = "Index", param1 = UrlParameter.Optional, param2 = UrlParameter.Optional, param3 = UrlParameter.Optional, param4 = UrlParameter.Optional, param5 = UrlParameter.Optional }, new[] { "Demeter.Controllers" });

		}
	}
}