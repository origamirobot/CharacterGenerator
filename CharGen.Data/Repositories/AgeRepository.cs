using CharGen.Data.Models;
using NHibernate;

namespace CharGen.Data.Repositories
{

	/// <summary>
	/// 
	/// </summary>
	public interface IAgeRepository : IRepository<Age> { }

	/// <summary>
	/// 
	/// </summary>
	public class AgeRepository : BaseRepository<Age>, IAgeRepository
	{


		#region CONSTRUCTORS


		/// <summary>
		/// Initializes a new instance of the <see cref="AgeRepository"/> class.
		/// </summary>
		/// <param name="session">The session.</param>
		public AgeRepository(ISession session) : base(session) { }


		#endregion CONSTRUCTORS

	}

}
