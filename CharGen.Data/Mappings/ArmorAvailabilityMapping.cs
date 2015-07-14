using CharGen.Data.Models;
using FluentNHibernate.Mapping;

namespace CharGen.Data.Mappings
{

	/// <summary>
	/// 
	/// </summary>
	public class ArmorAvailabilityMapping : ClassMap<ArmorAvailability>
	{

		/// <summary>
		/// Initializes a new instance of the <see cref="ArmorAvailabilityMapping"/> class.
		/// </summary>
		public ArmorAvailabilityMapping()
		{
			Table("ArmorAvailability");
			Id(x => x.Id, "Id");
			Map(x => x.Name);
		}

	}

}




