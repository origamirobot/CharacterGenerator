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
	public class WeaponType : BaseObject
	{

		/// <summary>
		/// Gets or sets the name.
		/// </summary>
		public virtual String Name { get; set; }


		/// <summary>
		/// Gets or sets the weapons.
		/// </summary>
		public virtual IList<Weapon> Weapons { get; set; }

	}

}
