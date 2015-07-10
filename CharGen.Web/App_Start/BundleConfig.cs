using System.Web;
using System.Web.Optimization;

namespace CharGen.Web
{
	public class BundleConfig
	{
		// For more information on Bundling, visit http://go.microsoft.com/fwlink/?LinkId=254725
		public static void RegisterBundles(BundleCollection bundles)
		{
			bundles.Add(new ScriptBundle("~/js/jquery").Include("~/App/libs/jquery/jquery-2.1.3.js"));
			bundles.Add(new ScriptBundle("~/js/bootstrap").Include("~/App/libs/bootstrap/js/bootstrap.js"));
			bundles.Add(new ScriptBundle("~/js/angular").Include(
				"~/App/libs/angular/angular.js",
				"~/App/libs/angular/angular-animate.js",
				"~/App/libs/angular/angular-cookies.js",
				"~/App/libs/angular/angular-loader.js",
				"~/App/libs/angular/angular-resource.js",
				"~/App/libs/angular/angular-route.js",
				"~/App/libs/angular/angular-messages.js",
				"~/App/libs/angular/angular-sanitize.js",
				"~/App/libs/ngstorage/ngStorage.js"
			));
			bundles.Add(new ScriptBundle("~/js/modernizr").Include("~/App/libs/modernizr/modernizr-2.8.3.js"));
			bundles.Add(new ScriptBundle("~/js/angularui").Include("~/App/libs/select2/select2.min.js", "~/App/libs/angular-ui-select2/src/select2.js"));
			bundles.Add(new ScriptBundle("~/js/bootstrapui").Include("~/App/libs/bootstrap-ui/ui-bootstrap-tpls-0.10.0.js"));
			bundles.Add(new ScriptBundle("~/js/theme").Include(
				"~/App/libs/pixel_admin/html/assets/javascripts/pixel-admin.min.js",
				"~/App/libs/jquery-ui/ui/minified/jquery-ui.min.js",
				"~/App/libs/slimscroll/jquery.slimscroll.min.js"));

			bundles.Add(new ScriptBundle("~/js/app").Include("~/app/js/app.js"));
			bundles.Add(new ScriptBundle("~/js/controllers").IncludeDirectory("~/app/js/controllers", "*.js", true));
			bundles.Add(new ScriptBundle("~/js/directives").IncludeDirectory("~/app/js/directives", "*.js", true));
			bundles.Add(new ScriptBundle("~/js/filters").IncludeDirectory("~/app/js/filters", "*.js", true));
			bundles.Add(new ScriptBundle("~/js/services").IncludeDirectory("~/app/js/services", "*.js", true));

			bundles.Add(new StyleBundle("~/css/fontawesome").Include("~/App/libs/font_awesome/css/font-awesome.css"));
			bundles.Add(new StyleBundle("~/css/bootstrap").Include(
				"~/App/libs/bootstrap/css/bootstrap.css",
				"~/App/libs/bootstrap/css/bootstrap-theme.css"));
			bundles.Add(new StyleBundle("~/css/theme").Include(
				"~/App/libs/pixel_admin/html/assets/stylesheets/pixel-admin.css",
				"~/App/libs/pixel_admin/html/assets/stylesheets/widgets.css",
				"~/App/libs/pixel_admin/html/assets/stylesheets/pages.css",
				"~/App/libs/pixel_admin/html/assets/stylesheets/rtl.css",
				"~/App/libs/pixel_admin/html/assets/stylesheets/themes.css",
				"~/App/css/app.css"));
		}
	}
}