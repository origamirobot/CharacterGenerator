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
	public class Skill : BaseObject
	{

		/// <summary>
		/// Gets or sets the classes.
		/// </summary>
		public virtual IList<Class> Classes { get; set; }

		/// <summary>
		/// Gets or sets the name.
		/// </summary>
		public virtual String Name { get; set; }

		/// <summary>
		/// Gets or sets the description.
		/// </summary>
		public virtual String Description { get; set; }

		/// <summary>
		/// Gets or sets the key ability.
		/// </summary>
		public virtual String KeyAbility { get; set; }

		/// <summary>
		/// Gets or sets a value indicating whether [armor check penalty].
		/// </summary>
		public virtual Boolean ArmorCheckPenalty { get; set; }

		/// <summary>
		/// Gets or sets a value indicating whether [use untrained].
		/// </summary>
		public virtual Boolean UseUntrained { get; set; }

	}

}
