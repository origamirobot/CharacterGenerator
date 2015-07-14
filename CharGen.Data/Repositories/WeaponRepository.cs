using CharGen.Data.Models;
using NHibernate;

namespace CharGen.Data.Repositories
{

	/// <summary>
	/// 
	/// </summary>
	public interface IWeaponRepository : IRepository<Weapon>
	{
	}

	/// <summary>
	/// 
	/// </summary>
	public class WeaponRepository : BaseRepository<Weapon>, IWeaponRepository
	{


		#region CONSTRUCTORS


		/// <summary>
		/// Initializes a new instance of the <see cref="WeaponRepository"/> class.
		/// </summary>
		/// <param name="session">The session.</param>
		public WeaponRepository(ISession session) : base(session) { }


		#endregion CONSTRUCTORS

	}

}
