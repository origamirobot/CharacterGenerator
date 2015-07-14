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
	public class ServiceMapping : ClassMap<Service>
	{

		/// <summary>
		/// Initializes a new instance of the <see cref="ServiceMapping"/> class.
		/// </summary>
		public ServiceMapping()
		{
			Table("Services");
			Id(x => x.Id, "Id");
			Map(x => x.Name);
			Map(x => x.Cost);
		}

	}

}




