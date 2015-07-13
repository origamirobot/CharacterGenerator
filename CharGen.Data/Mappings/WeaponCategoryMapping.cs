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
	public class WeaponCategoryMapping : ClassMap<WeaponCategory>
	{

		/// <summary>
		/// Initializes a new instance of the <see cref="WeaponCategoryMapping"/> class.
		/// </summary>
		public WeaponCategoryMapping()
		{
			Table("WeaponCategories");
			Id(x => x.Id, "Id");
			Map(x => x.Name);
			Map(x => x.Description);
		}

	}

}
