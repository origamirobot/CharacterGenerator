using CharGen.Data.Models;
using NHibernate;

namespace CharGen.Data.Repositories
{

	/// <summary>
	/// 
	/// </summary>
	public interface IEquipmentTypeRepository : IRepository<EquipmentType>
	{
	}

	/// <summary>
	/// 
	/// </summary>
	public class EquipmentTypeRepository : BaseRepository<EquipmentType>, IEquipmentTypeRepository
	{

		#region CONSTRUCTORS


		/// <summary>
		/// Initializes a new instance of the <see cref="EquipmentTypeRepository"/> class.
		/// </summary>
		/// <param name="session">The session.</param>
		public EquipmentTypeRepository(ISession session) : base(session) { }


		#endregion CONSTRUCTORS

	}

}
