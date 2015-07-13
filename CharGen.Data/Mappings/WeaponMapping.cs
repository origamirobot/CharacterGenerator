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
	public class WeaponMapping : ClassMap<Weapon>
	{

		/// <summary>
		/// Initializes a new instance of the <see cref="WeaponMapping"/> class.
		/// </summary>
		public WeaponMapping()
		{
			Table("Species");
			Id(x => x.Id, "Id");
			Map(x => x.Name);
			Map(x => x.Cost);
			Map(x => x.Critical);
			Map(x => x.Damage);
			Map(x => x.HasAutofire);
			Map(x => x.HasMultifire);
			Map(x => x.RangeIncrement);
			Map(x => x.Size);
			Map(x => x.StunFort);
			Map(x => x.Weight);
			References(x => x.Category, "Category");
			References(x => x.Type, "Type");
		}

	}

}
