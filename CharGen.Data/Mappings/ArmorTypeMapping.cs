using CharGen.Data.Models;
using FluentNHibernate.Mapping;

namespace CharGen.Data.Mappings
{

	/// <summary>
	/// 
	/// </summary>
	public class ArmorTypeMapping : ClassMap<ArmorType>
	{

		/// <summary>
		/// Initializes a new instance of the <see cref="ArmorTypeMapping"/> class.
		/// </summary>
		public ArmorTypeMapping()
		{
			Table("ArmorType");
			Id(x => x.Id, "Id");
			Map(x => x.Name);
		}

	}

}




