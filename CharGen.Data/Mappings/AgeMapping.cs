using CharGen.Data.Models;
using FluentNHibernate.Mapping;

namespace CharGen.Data.Mappings
{

	/// <summary>
	/// 
	/// </summary>
	public class AgeMapping : ClassMap<Age>
	{

		/// <summary>
		/// Initializes a new instance of the <see cref="AgeMapping"/> class.
		/// </summary>
		public AgeMapping()
		{
			Table("Ages");
			Id(x => x.Id, "Id");
			Map(x => x.Name);
			Map(x => x.LowAge);
			Map(x => x.HighAge);
			References(x => x.Species, "SpeciesId");
		}

	}

}




