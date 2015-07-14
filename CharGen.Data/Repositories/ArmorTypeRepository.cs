using CharGen.Data.Models;
using NHibernate;

namespace CharGen.Data.Repositories
{

	/// <summary>
	/// 
	/// </summary>
	public interface IArmorTypeRepository : IRepository<ArmorType>
	{
	}

	/// <summary>
	/// 
	/// </summary>
	public class ArmorTypeRepository : BaseRepository<ArmorType>, IArmorTypeRepository
	{


		#region CONSTRUCTORS


		/// <summary>
		/// Initializes a new instance of the <see cref="ArmorTypeRepository"/> class.
		/// </summary>
		/// <param name="session">The session.</param>
		public ArmorTypeRepository(ISession session) : base(session) { }


		#endregion CONSTRUCTORS

	}

}
