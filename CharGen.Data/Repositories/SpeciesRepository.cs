using System;
using System.Collections.Generic;
using System.Linq;
using CharGen.Data.Models;
using NHibernate;

namespace CharGen.Data.Repositories
{


	/// <summary>
	/// 
	/// </summary>
	public interface ISpeciesRepository : IRepository<Species> { }


	/// <summary>
	/// 
	/// </summary>
	/// <typeparam name="T"></typeparam>
	public class SpeciesRepository : BaseRepository<Species>, ISpeciesRepository
	{

		/// <summary>
		/// Initializes a new instance of the <see cref="SpeciesRepository{T}"/> class.
		/// </summary>
		/// <param name="session">The session.</param>
		public SpeciesRepository(ISession session) : base(session)
		{
		}

	}

}
