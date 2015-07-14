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
	public class Age : BaseObject
	{

		#region PUBLIC ACCESSORS


		/// <summary>
		/// Gets or sets the species.
		/// </summary>
		public virtual Species Species { get; set; }

		/// <summary>
		/// Gets or sets the low age.
		/// </summary>
		public virtual Int32 LowAge { get; set; }

		/// <summary>
		/// Gets or sets the high age.
		/// </summary>
		public virtual Int32 HighAge { get; set; }

		/// <summary>
		/// Gets or sets the name.
		/// </summary>
		public virtual String Name { get; set; }


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
			if (HighAge == 9999)
				return String.Format("{0} {1}+", Species, LowAge);

			return String.Format("{0} between {1} - {2} years", Species, LowAge, HighAge);
		}


		#endregion PUBLIC METHODS

	}

}
