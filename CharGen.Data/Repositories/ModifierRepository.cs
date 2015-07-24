using CharGen.Data.Models;
using NHibernate;

namespace CharGen.Data.Repositories
{

	/// <summary>
	/// 
	/// </summary>
	public interface IModifierRepository : IRepository<Modifier> { }

	/// <summary>
	/// 
	/// </summary>
	public class ModifierRepository : BaseRepository<Modifier>, IModifierRepository
	{

		#region CONSTRUCTORS


		/// <summary>
		/// Initializes a new instance of the <see cref="ModifierRepository"/> class.
		/// </summary>
		/// <param name="session">The session.</param>
		public ModifierRepository(ISession session) : base(session) { }


		#endregion CONSTRUCTORS

	}

}
