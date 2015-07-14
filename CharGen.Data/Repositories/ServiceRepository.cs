using CharGen.Data.Models;
using NHibernate;

namespace CharGen.Data.Repositories
{

	/// <summary>
	/// 
	/// </summary>
	public interface IServiceRepository : IRepository<Service>
	{
	}

	/// <summary>
	/// 
	/// </summary>
	public class ServiceRepository : BaseRepository<Service>, IServiceRepository
	{


		#region CONSTRUCTORS


		/// <summary>
		/// Initializes a new instance of the <see cref="ServiceRepository"/> class.
		/// </summary>
		/// <param name="session">The session.</param>
		public ServiceRepository(ISession session) : base(session) { }


		#endregion CONSTRUCTORS

	}

}
