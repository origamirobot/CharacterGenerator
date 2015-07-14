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
	public class EquipmentMapping : ClassMap<Equipment>
	{

		/// <summary>
		/// Initializes a new instance of the <see cref="EquipmentMapping"/> class.
		/// </summary>
		public EquipmentMapping()
		{
			Table("Equipment");
			Id(x => x.Id, "Id");
			Map(x => x.Name);
			Map(x => x.Cost);
			Map(x => x.Weight);
		}

	}

}




