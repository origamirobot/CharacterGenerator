using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CharGen.Web.Controllers
{


	/// <summary>
	/// 
	/// </summary>
	public class AbilitiesController : Controller
    {



		/// <summary>
		/// Gets the modifier.
		/// </summary>
		/// <param name="strength">The strength.</param>
		/// <param name="dexterity">The dexterity.</param>
		/// <param name="constitution">The constitution.</param>
		/// <param name="intelligence">The intelligence.</param>
		/// <param name="wisdom">The wisdom.</param>
		/// <param name="charisma">The charisma.</param>
		/// <returns></returns>
		public ActionResult GetModifiers(int strength, int dexterity, int constitution, int intelligence, int wisdom, int charisma)
		{
			var result = new
			{
				strengthModifier = CalculateModifier(strength),
				dexterityModifier = CalculateModifier(dexterity),
				constitutionModifier = CalculateModifier(constitution),
				intelligenceModifier = CalculateModifier(intelligence),
				wisdomModifier = CalculateModifier(wisdom),
				charismaModifier = CalculateModifier(charisma),
			};
			return Json(result, JsonRequestBehavior.AllowGet);
		}


		/// <summary>
		/// Calculates the modifier for the specified score.
		/// </summary>
		/// <param name="score">The score to calculate modifier for.</param>
		/// <returns></returns>
		private int CalculateModifier(int score)
		{
			var modifier = -5;
			var range = 1;
			while (true)
			{
				if (score >= range && score <= range + 1)
					break;

				modifier++;
				range += 2;
				if (modifier == 99)
					break;
			}
			return modifier;
		}

    }
}
