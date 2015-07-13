using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FluentNHibernate.Cfg;
using FluentNHibernate.Cfg.Db;

namespace CharGen.Data.Configuration
{

	/// <summary>
	/// Defines a contract that all NHibernate configurations must implement. 
	/// </summary>
	/// <remarks>
	///	This is broken out into an inteface for testing purposes.
	/// </remarks>
	public interface INHibernateConfiguration
	{

		/// <summary>
		/// Gets an NHibernate configuration.
		/// </summary>
		/// <returns></returns>
		NHibernate.Cfg.Configuration GetConfiguration();

		/// <summary>
		/// Gets a database connection. This can be overridden in a concrete class for testing purposes.
		/// </summary>
		/// <returns></returns>
		IPersistenceConfigurer GetConnection();

		/// <summary>
		/// Gets the fluent nhibernate configuration for mapping objects.
		/// </summary>
		/// <returns></returns>
		FluentConfiguration GetFluentConfiguration();

	}

}
