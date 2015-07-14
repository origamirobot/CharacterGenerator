using CharGen.Data.Models;
using NHibernate;

namespace CharGen.Data.Repositories
{

	/// <summary>
	/// 
	/// </summary>
	public interface IArmorRepository : IRepository<Armor>
	{
	}

	/// <summary>
	/// 
	/// </summary>
	public class ArmorRepository : BaseRepository<Armor>, IArmorRepository
	{


		#region CONSTRUCTORS


		/// <summary>
		/// Initializes a new instance of the <see cref="ArmorRepository"/> class.
		/// </summary>
		/// <param name="session">The session.</param>
		public ArmorRepository(ISession session) : base(session) { }


		#endregion CONSTRUCTORS

	}

}
