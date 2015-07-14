using CharGen.Data.Models;
using FluentNHibernate.Mapping;

namespace CharGen.Data.Mappings
{

	/// <summary>
	/// 
	/// </summary>
	public class ClassMapping : ClassMap<Class>
	{

		/// <summary>
		/// Initializes a new instance of the <see cref="ClassMapping"/> class.
		/// </summary>
		public ClassMapping()
		{
			Table("Classes");
			Id(x => x.Id, "Id");
			Map(x => x.Name);
			Map(x => x.Description);
			Map(x => x.TrainedSkills);
			HasManyToMany(x => x.Skills).Table("ClassSkill").ParentKeyColumn("ClassId").ChildKeyColumn("SkillId");
		}

	}

}




