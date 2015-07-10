using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CharGen.Data.Models
{

	/// <summary>
	/// 
	/// </summary>
	public class Species
	{

		/// <summary>
		/// Gets or sets the identifier.
		/// </summary>
		public int Id { get; set; }

		/// <summary>
		/// Gets or sets the name.
		/// </summary>
		public String Name { get; set; }

		/// <summary>
		/// Gets or sets the description.
		/// </summary>
		public String Description { get; set; }

		/// <summary>
		/// Gets or sets the examples.
		/// </summary>
		public String Examples { get; set; }


		/// <summary>
		/// Gets or sets the strength adjustment.
		/// </summary>
		public Int32 StrengthAdjustment { get; set; }

		/// <summary>
		/// Gets or sets the constitution adjustment.
		/// </summary>
		public Int32 ConstitutionAdjustment { get; set; }

		/// <summary>
		/// Gets or sets the intelligence adjustment.
		/// </summary>
		public Int32 IntelligenceAdjustment { get; set; }

		/// <summary>
		/// Gets or sets the dexterity adjustment.
		/// </summary>
		public Int32 DexterityAdjustment { get; set; }

		/// <summary>
		/// Gets or sets the wisdom adjustment.
		/// </summary>
		public Int32 WisdomAdjustment { get; set; }

		/// <summary>
		/// Gets or sets the charisma adjustment.
		/// </summary>
		public Int32 CharismaAdjustment { get; set; }

	}

}
