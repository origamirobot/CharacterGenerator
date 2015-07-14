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
	public class Species : BaseObject
	{

		#region PUBLIC ACCESSORS


		/// <summary>
		/// Gets or sets the name.
		/// </summary>
		public virtual String Name { get; set; }

		/// <summary>
		/// Gets or sets the description.
		/// </summary>
		public virtual String Description { get; set; }

		/// <summary>
		/// Gets or sets the examples.
		/// </summary>
		public virtual String Examples { get; set; }

		/// <summary>
		/// Gets or sets the strength adjustment.
		/// </summary>
		public virtual Int32 StrengthAdjustment { get; set; }

		/// <summary>
		/// Gets or sets the constitution adjustment.
		/// </summary>
		public virtual Int32 ConstitutionAdjustment { get; set; }

		/// <summary>
		/// Gets or sets the intelligence adjustment.
		/// </summary>
		public virtual Int32 IntelligenceAdjustment { get; set; }

		/// <summary>
		/// Gets or sets the dexterity adjustment.
		/// </summary>
		public virtual Int32 DexterityAdjustment { get; set; }

		/// <summary>
		/// Gets or sets the wisdom adjustment.
		/// </summary>
		public virtual Int32 WisdomAdjustment { get; set; }

		/// <summary>
		/// Gets or sets the charisma adjustment.
		/// </summary>
		public virtual Int32 CharismaAdjustment { get; set; }


		#endregion PUBLIC ACCESSORS

		#region PUBLIC METHODS


		/// <summary>
		/// Returns a <see cref="System.String" /> that represents this instance.
		/// </summary>
		/// <returns>
		/// A <see cref="System.String" /> that represents this instance.
		/// </returns>
		public override string ToString()
		{
			return Name;
		}


		#endregion PUBLIC METHODS

	}

}
