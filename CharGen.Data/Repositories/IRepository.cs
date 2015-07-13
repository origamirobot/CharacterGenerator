using System;
using System.Collections.Generic;
using NHibernate;

namespace CharGen.Data.Repositories
{

	/// <summary>
	/// 
	/// </summary>
	public interface IRepository<T>
	{

		/// <summary>
		/// Gets or sets the session.
		/// </summary>
		ISession Session { get; set; }

		/// <summary>
		/// Retrieves an entity by the specified identifier
		/// </summary>
		/// <param name="id">The identifier of the entity to get.</param>
		/// <returns></returns>
		T Retrieve(int id);

		/// <summary>
		/// Lists all entities in the data store.
		/// </summary>
		/// <returns></returns>
		IList<T> List();

		/// <summary>
		/// Saves the specified entity.
		/// </summary>
		/// <param name="entity">The entity to save.</param>
		void Save(T entity);

		/// <summary>
		/// Deletes the specified entity.
		/// </summary>
		/// <param name="entity">The entity to delete.</param>
		void Delete(T entity);

		/// <summary>
		/// Deletes the specified entity.
		/// </summary>
		/// <param name="id">The identifier of the entity to delete.</param>
		void Delete(int id);

	}

}
