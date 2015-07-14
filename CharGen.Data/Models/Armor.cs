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
	public class Armor : BaseObject
	{

		/// <summary>
		/// Gets or sets the name.
		/// </summary>
		public virtual String Name { get; set; }

		/// <summary>
		/// Gets or sets the cost.
		/// </summary>
		public virtual Int32 Cost { get; set; }

		/// <summary>
		/// Gets or sets the reflex bonus.
		/// </summary>
		public virtual Int32 ReflexBonus { get; set; }

		/// <summary>
		/// Gets or sets the maximum dexterity bonus.
		/// </summary>
		public virtual Int32 MaxDexterityBonus { get; set; }

		/// <summary>
		/// Gets or sets the speed reduction4.
		/// </summary>
		public virtual Int32 SpeedReduction4 { get; set; }

		/// <summary>
		/// Gets or sets the speed reduction6.
		/// </summary>
		public virtual Int32 SpeedReduction6 { get; set; }

		/// <summary>
		/// Gets or sets the weight.
		/// </summary>
		public virtual Decimal Weight { get; set; }

		/// <summary>
		/// Gets or sets the availability.
		/// </summary>
		public virtual ArmorAvailability Availability { get; set; }

		/// <summary>
		/// Gets or sets a value indicating whether this instance is rare.
		/// </summary>
		public virtual Boolean IsRare { get; set; }

		/// <summary>
		/// Gets or sets the type.
		/// </summary>
		public virtual ArmorType Type { get; set; }

		/// <summary>
		/// Gets or sets the fortitude bonus.
		/// </summary>
		public virtual Int32 FortitudeBonus { get; set; }

	}

}
