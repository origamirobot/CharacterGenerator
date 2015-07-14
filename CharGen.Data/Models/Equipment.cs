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
	public class Equipment : BaseObject
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
		/// Gets or sets the weight.
		/// </summary>
		public virtual Decimal Weight { get; set; }

	}

}
