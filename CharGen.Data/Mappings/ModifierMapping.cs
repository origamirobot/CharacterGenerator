using CharGen.Data.Models;
using FluentNHibernate.Mapping;

namespace CharGen.Data.Mappings
{

	/// <summary>
	/// Maps <see cref="Modifier"/> to the database schema.
	/// </summary>
	public class ModifierMapping : ClassMap<Modifier>
	{

		/// <summary>
		/// Initializes a new instance of the <see cref="ModifierMapping"/> class.
		/// </summary>
		public ModifierMapping()
		{
			Table("Modifiers");
			Id(x => x.Id);
			Map(x => x.Descriptor);
			Map(x => x.HighAbility);
			Map(x => x.LowAbility);
			Map(x => x.Meaning);
			Map(x => x.Value);
		}
	
	}

}
