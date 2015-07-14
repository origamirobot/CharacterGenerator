using CharGen.Data.Models;
using NHibernate;

namespace CharGen.Data.Repositories
{

	/// <summary>
	/// 
	/// </summary>
	public interface IArmorAvailabilityRepository : IRepository<ArmorAvailability>
	{
	}

	/// <summary>
	/// 
	/// </summary>
	public class ArmorAvailabilityRepository : BaseRepository<ArmorAvailability>, IArmorAvailabilityRepository
	{


		#region CONSTRUCTORS


		/// <summary>
		/// Initializes a new instance of the <see cref="ArmorAvailabilityRepository"/> class.
		/// </summary>
		/// <param name="session">The session.</param>
		public ArmorAvailabilityRepository(ISession session) : base(session) { }


		#endregion CONSTRUCTORS

	}

}
