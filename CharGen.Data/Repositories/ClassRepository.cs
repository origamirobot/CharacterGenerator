using CharGen.Data.Models;
using NHibernate;

namespace CharGen.Data.Repositories
{

	/// <summary>
	/// 
	/// </summary>
	public interface IClassRepository : IRepository<Class> { }

	/// <summary>
	/// 
	/// </summary>
	public class ClassRepository : BaseRepository<Class>, IClassRepository
	{


		#region CONSTRUCTORS


		/// <summary>
		/// Initializes a new instance of the <see cref="ClassRepository"/> class.
		/// </summary>
		/// <param name="session">The session.</param>
		public ClassRepository(ISession session) : base(session) { }


		#endregion CONSTRUCTORS

	}

}
