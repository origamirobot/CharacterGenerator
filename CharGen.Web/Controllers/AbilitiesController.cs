using System.Linq;
using System.Web.Mvc;
using CharGen.Data.Models;
using CharGen.Data.Repositories;

namespace CharGen.Web.Controllers
{

	/// <summary>
	/// 
	/// </summary>
	public class AbilitiesController : Controller
    {

		#region PRIVATE PROPERTIES


		/// <summary>
		/// Gets the modifier repository.
		/// </summary>
		protected IModifierRepository ModifierRepository { get; private set; }


		#endregion PRIVATE PROPERTIES

		#region CONSTRUCTORS


		/// <summary>
		/// Initializes a new instance of the <see cref="AbilitiesController"/> class.
		/// </summary>
		/// <param name="modifierRepository">The modifier repository.</param>
		public AbilitiesController(IModifierRepository modifierRepository)
		{
			ModifierRepository = modifierRepository;
		}


		#endregion CONSTRUCTORS

		#region ACTION METHODS


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


		#endregion ACTION METHODS

		#region PRIVATE METHODS


		/// <summary>
		/// Calculates the modifier for the specified score.
		/// </summary>
		/// <param name="score">The score to calculate modifier for.</param>
		/// <returns></returns>
		private Modifier CalculateModifier(int score)
		{
			// CHECK THE DATABASE FOR MODIFIER ENTRY
			var mod = ModifierRepository.List().FirstOrDefault(x => x.LowAbility <= score && x.HighAbility >= score);
			if (mod != null)
				return mod;

			// CANT FIND ENTRY IN DB... CALCULATE MANUALLY
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
			return new Modifier() {Value = modifier};
		}


		#endregion PRIVATE METHODS

	}

}
