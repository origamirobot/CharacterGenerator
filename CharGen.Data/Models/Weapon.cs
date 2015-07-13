using System;

namespace CharGen.Data.Models
{

	/// <summary>
	/// 
	/// </summary>
	public class Weapon : BaseObject
	{

		/// <summary>
		/// Gets or sets the name.
		/// </summary>
		public virtual String Name { get; set; }

		/// <summary>
		/// Gets or sets the category.
		/// </summary>
		public virtual WeaponCategory Category { get; set; }

		/// <summary>
		/// Gets or sets the group.
		/// </summary>
		public virtual WeaponType Type { get; set; }

		/// <summary>
		/// Gets or sets the cost.
		/// </summary>
		public virtual Decimal Cost { get; set; }

		/// <summary>
		/// Gets or sets the damage.
		/// </summary>
		public virtual String Damage { get; set; }

		/// <summary>
		/// Gets or sets the critical.
		/// </summary>
		public virtual String Critical { get; set; }

		/// <summary>
		/// Gets or sets the range increment.
		/// </summary>
		public virtual String RangeIncrement { get; set; }

		/// <summary>
		/// Gets or sets the weight.
		/// </summary>
		public virtual Decimal Weight { get; set; }

		/// <summary>
		/// Gets or sets the size.
		/// </summary>
		public virtual String Size { get; set; }

		/// <summary>
		/// Gets or sets a value indicating whether this instance has multifire.
		/// </summary>
		public virtual Boolean HasMultifire { get; set; }

		/// <summary>
		/// Gets or sets a value indicating whether this instance has autofire.
		/// </summary>
		public virtual Boolean HasAutofire { get; set; }

		/// <summary>
		/// Gets or sets the stun fort.
		/// </summary>
		public virtual String StunFort { get; set; }



	}

}
