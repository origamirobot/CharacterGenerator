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
	public class ArmorMapping : ClassMap<Armor>
	{

		/// <summary>
		/// Initializes a new instance of the <see cref="ArmorMapping"/> class.
		/// </summary>
		public ArmorMapping()
		{
			Table("Armor");
			Id(x => x.Id, "Id");
			Map(x => x.Name);
			Map(x => x.Cost);
			Map(x => x.ReflexBonus);
			Map(x => x.MaxDexterityBonus);
			Map(x => x.SpeedReduction4);
			Map(x => x.SpeedReduction6);
			Map(x => x.Weight);
			Map(x => x.IsRare);
			Map(x => x.FortitudeBonus);
			References(x => x.Availability, "AvailabilityId");
			References(x => x.Type, "ArmorTypeId");
		}

	}

}




