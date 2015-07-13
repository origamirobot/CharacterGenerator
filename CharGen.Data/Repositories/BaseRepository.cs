using System;
using System.Collections.Generic;
using System.Linq;
using NHibernate;

namespace CharGen.Data.Repositories
{

	/// <summary>
	/// 
	/// </summary>
	/// <typeparam name="T"></typeparam>
	public class BaseRepository<T> : IRepository<T>
	{

		#region PRIVATE PROPERTIES

		#endregion PRIVATE PROPERTIES

		#region PUBLIC PROPERTIES


		/// <summary>
		/// Gets the session.
		/// </summary>
		public ISession Session { get; set; }


		#endregion PUBLIC PROPERTIES

		#region CONSTRUCTORS

		/// <summary>
		/// Initializes a new instance of the <see cref="BaseRepository{T}" /> class.
		/// </summary>
		/// <param name="session">The session.</param>
		public BaseRepository(ISession session)
		{
			Session = session;
		}

		#endregion CONSTRUCTORS

		#region PUBLIC METHODS


		/// <summary>
		/// Retrieves the specified identifier.
		/// </summary>
		/// <param name="id">The identifier.</param>
		/// <returns></returns>
		public virtual T Retrieve(int id)
		{
			return Session.Get<T>(id);
		}

		/// <summary>
		/// Lists all entities in the data store.
		/// </summary>
		/// <returns></returns>
		public virtual IList<T> List()
		{
			return Session.CreateCriteria(typeof (T)).Future<T>().ToList();
		}

		/// <summary>
		/// Saves the specified entity.
		/// </summary>
		/// <param name="entity">The entity to save.</param>
		public virtual void Save(T entity)
		{
			Session.SaveOrUpdate(entity);

			//Session.Flush();
		}

		/// <summary>
		/// Deletes the specified entity.
		/// </summary>
		/// <param name="entity">The entity to delete.</param>
		public virtual void Delete(T entity)
		{
			Session.Delete(entity);
		}

		/// <summary>
		/// Deletes the specified entity.
		/// </summary>
		/// <param name="id">The identifier of the entity to delete.</param>
		public virtual void Delete(int id)
		{
			var entity = Retrieve(id);
			Delete(entity);
		}


		#endregion PUBLIC METHODS

	}

}
