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
	public class Race
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

	}

}
