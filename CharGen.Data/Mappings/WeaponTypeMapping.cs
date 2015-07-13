using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CharGen.Data.Models;
using FluentNHibernate.Mapping;

namespace CharGen.Data.Mappings
{

	/// <summary>
	/// 
	/// </summary>
	public class WeaponTypeMapping : ClassMap<WeaponType>
	{

		/// <summary>
		/// Initializes a new instance of the <see cref="WeaponTypeMapping"/> class.
		/// </summary>
		public WeaponTypeMapping()
		{
			Table("WeaponTypes");
			Id(x => x.Id, "Id");
			Map(x => x.Name);
		}

	}

}
