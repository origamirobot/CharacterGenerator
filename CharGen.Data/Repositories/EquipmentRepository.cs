using CharGen.Data.Models;
using NHibernate;

namespace CharGen.Data.Repositories
{

	/// <summary>
	/// 
	/// </summary>
	public interface IEquipmentRepository : IRepository<Equipment>
	{
	}

	/// <summary>
	/// 
	/// </summary>
	public class EquipmentRepository : BaseRepository<Equipment>, IEquipmentRepository
	{


		#region CONSTRUCTORS


		/// <summary>
		/// Initializes a new instance of the <see cref="EquipmentRepository"/> class.
		/// </summary>
		/// <param name="session">The session.</param>
		public EquipmentRepository(ISession session) : base(session) { }


		#endregion CONSTRUCTORS

	}

}
