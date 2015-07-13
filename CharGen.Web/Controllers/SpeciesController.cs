using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using CharGen.Data.Models;
using CharGen.Data.Repositories;

namespace CharGen.Web.Controllers
{
    public class SpeciesController : Controller
    {

	    #region PRIVATE PROPERTIES


		/// <summary>
		/// Gets the species repository.
		/// </summary>
		protected ISpeciesRepository SpeciesRepository { get; private set; }


		#endregion PRIVATE PROPERTIES

		#region CONSTRUCTORS


		/// <summary>
		/// Initializes a new instance of the <see cref="SpeciesController"/> class.
		/// </summary>
		/// <param name="speciesRepository">The species repository.</param>
		public SpeciesController(ISpeciesRepository speciesRepository)
		{
			SpeciesRepository = speciesRepository;
		}


		#endregion CONSTRUCTORS



		/// <summary>
		/// Lists this instance.
		/// </summary>
		/// <returns></returns>
        public ActionResult List()
		{
			//var species = new List<Species>()
			//{
			//	new Species(){ Name = "Human", Description = ""},
			//	new Species(){ Name = "Bothan", Description = "", DexterityAdjustment = 2, ConstitutionAdjustment = -2},
			//	new Species(){ Name = "Cerean", Description = "", IntelligenceAdjustment = 2, WisdomAdjustment = 2, DexterityAdjustment = -2},
			//	new Species(){ Name = "Duros", Description = "", DexterityAdjustment = 2, IntelligenceAdjustment = 2, ConstitutionAdjustment = -2},
			//	new Species(){ Name = "Ewok", Description = "", DexterityAdjustment = 2, StrengthAdjustment = -2},
			//	new Species(){ Name = "Gamorrean", Description = "", StrengthAdjustment = 2, DexterityAdjustment = -2, IntelligenceAdjustment = -2},
			//	new Species(){ Name = "Gungan", Description = "", DexterityAdjustment =2, IntelligenceAdjustment = -2, CharismaAdjustment = -2},
			//	new Species(){ Name = "Ithorian", Description = "", WisdomAdjustment = 2, CharismaAdjustment = 2, DexterityAdjustment = -2},
			//	new Species(){ Name = "Kel Dor", Description = "", DexterityAdjustment = 2, WisdomAdjustment = 2, ConstitutionAdjustment = -2},
			//	new Species(){ Name = "Mon Calamari", Description = "", IntelligenceAdjustment = 2, WisdomAdjustment = 2, ConstitutionAdjustment =-2},
			//	new Species(){ Name = "Quarren", Description = "", ConstitutionAdjustment = 2, WisdomAdjustment = -2, CharismaAdjustment = -2},
			//	new Species(){ Name = "Rodian", Description = "", DexterityAdjustment = 2, WisdomAdjustment = -2, CharismaAdjustment = -2 },
			//	new Species(){ Name = "Sullustan", Description = "", DexterityAdjustment = 2, ConstitutionAdjustment = -2 },
			//	new Species(){ Name = "Trandoshan", Description = "", StrengthAdjustment = 2, DexterityAdjustment = -2 },
			//	new Species(){ Name = "Twi'lek", Description = "", CharismaAdjustment = 2, WisdomAdjustment = -2 },
			//	new Species(){ Name = "Wookiee", Description = "", StrengthAdjustment = 4, ConstitutionAdjustment = 2, DexterityAdjustment = -2, WisdomAdjustment = -2, CharismaAdjustment = -2 },
			//	new Species(){ Name = "Zabrak", Description = "" },
			//};


			var species = SpeciesRepository.List();


			return Json(species, JsonRequestBehavior.AllowGet);
		}

    }
}
