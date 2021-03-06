﻿using System;
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
	public class EquipmentTypeMapping : ClassMap<EquipmentType>
	{

		/// <summary>
		/// Initializes a new instance of the <see cref="EquipmentTypeMapping"/> class.
		/// </summary>
		public EquipmentTypeMapping()
		{
			Table("EquipmentType");
			Id(x => x.Id, "Id");
			Map(x => x.Name);
		}

	}

}




