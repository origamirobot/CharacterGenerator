using CharGen.Data.Models;
using FluentNHibernate.Mapping;

namespace CharGen.Data.Mappings
{

	/// <summary>
	/// 
	/// </summary>
	public class SpeciesMapping : ClassMap<Species>
	{

		/// <summary>
		/// Initializes a new instance of the <see cref="SpeciesMapping"/> class.
		/// </summary>
		public SpeciesMapping()
		{
			Table("Species");
			Id(x => x.Id, "Id");
			Map(x => x.Name);
			Map(x => x.Description);
			Map(x => x.Examples);
			Map(x => x.StrengthAdjustment);
			Map(x => x.DexterityAdjustment);
			Map(x => x.IntelligenceAdjustment);
			Map(x => x.WisdomAdjustment);
			Map(x => x.ConstitutionAdjustment);
			Map(x => x.CharismaAdjustment);
		}

	}

}
