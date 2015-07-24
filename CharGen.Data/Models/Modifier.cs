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
	public class Modifier : BaseObject
	{

		#region PUBLIC ACCESSORS


		/// <summary>
		/// Gets or sets the descriptor.
		/// </summary>
		public virtual String Descriptor { get; set; }

		/// <summary>
		/// Gets or sets the meaning.
		/// </summary>
		public virtual String Meaning { get; set; }

		/// <summary>
		/// Gets or sets the low ability.
		/// </summary>
		public virtual Int32 LowAbility { get; set; }

		/// <summary>
		/// Gets or sets the high ability.
		/// </summary>
		public virtual Int32 HighAbility { get; set; }

		/// <summary>
		/// Gets or sets the value.
		/// </summary>
		public virtual Int32 Value { get; set; }


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
			return String.Format("{0} {1}", Descriptor, Value > 0 ? "+" + Value : Value.ToString());

		}

		#endregion PUBLIC METHODS

	}


}
