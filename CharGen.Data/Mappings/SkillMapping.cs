using CharGen.Data.Models;
using FluentNHibernate.Mapping;

namespace CharGen.Data.Mappings
{

	/// <summary>
	/// 
	/// </summary>
	public class SkillMapping : ClassMap<Skill>
	{

		/// <summary>
		/// Initializes a new instance of the <see cref="SkillMapping"/> class.
		/// </summary>
		public SkillMapping()
		{
			Table("Skills");
			Id(x => x.Id, "Id");
			Map(x => x.Name);
			Map(x => x.Description);
			Map(x => x.KeyAbility);
			Map(x => x.UseUntrained);
			Map(x => x.ArmorCheckPenalty);
			HasManyToMany(x => x.Classes).Table("ClassSkill").ParentKeyColumn("SkillId").ChildKeyColumn("ClassId");
		}

	}

}




