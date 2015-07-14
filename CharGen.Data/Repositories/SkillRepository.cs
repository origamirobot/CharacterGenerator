using CharGen.Data.Models;
using NHibernate;

namespace CharGen.Data.Repositories
{

	/// <summary>
	/// 
	/// </summary>
	public interface ISkillRepository : IRepository<Skill> { }

	/// <summary>
	/// 
	/// </summary>
	public class SkillRepository : BaseRepository<Skill>, ISkillRepository
	{


		#region CONSTRUCTORS


		/// <summary>
		/// Initializes a new instance of the <see cref="SkillRepository"/> class.
		/// </summary>
		/// <param name="session">The session.</param>
		public SkillRepository(ISession session) : base(session) { }


		#endregion CONSTRUCTORS

	}

}
