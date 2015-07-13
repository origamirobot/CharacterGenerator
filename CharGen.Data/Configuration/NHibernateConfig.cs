using FluentNHibernate.Automapping;
using FluentNHibernate.Cfg;
using FluentNHibernate.Cfg.Db;
using System;
using CharGen.Core.Configuration;
using CharGen.Data.Models;

namespace CharGen.Data.Configuration
{

	/// <summary>
	/// 
	/// </summary>
	public class DefaultNHibernateConfig : INHibernateConfiguration
	{

		#region PRIVATE PROPERTIES


		/// <summary>
		/// Gets the configuration.
		/// </summary>
		protected IConfiguration Configuration { get; private set; }


		#endregion PRIVATE PROPERTIES

		#region CONSTRUCTORS


		/// <summary>
		/// Initializes a new instance of the <see cref="DefaultNHibernateConfig" /> class.
		/// </summary>
		/// <param name="config">The configuration.</param>
		public DefaultNHibernateConfig(IConfiguration config)
		{
			Configuration = config;
		}


		#endregion CONSTRUCTORS

		#region PUBLIC METHODS


		/// <summary>
		/// Gets the configuration.
		/// </summary>
		/// <returns></returns>
		public NHibernate.Cfg.Configuration GetConfiguration()
		{
			var cfg = GetFluentConfiguration();
			return cfg.BuildConfiguration();
		}

		/// <summary>
		/// Gets the configured database connection for nHibernate.
		/// </summary>
		/// <returns></returns>
		public IPersistenceConfigurer GetConnection()
		{
			String connetionName = Configuration.ConnectionName;
			var config = MsSqlConfiguration.MsSql2008
				.ConnectionString(c => c.FromConnectionStringWithKey(connetionName))
				.AdoNetBatchSize(100);

			if (Configuration.ShowSql)
				config = config.ShowSql();

			if (Configuration.FormatSql)
				config = config.FormatSql();

			return config;
		}

		/// <summary>
		/// Gets the fluently configured configuration for nHibernate.
		/// </summary>
		/// <returns></returns>
		public FluentConfiguration GetFluentConfiguration()
		{
			var config = Fluently.Configure()
				.Database(GetConnection)
				.Mappings(m =>
				{
					m.HbmMappings.AddFromAssemblyOf<Species>();
					m.FluentMappings.AddFromAssemblyOf<Species>();
				});
			return config;
		}

		/// <summary>
		/// Builds the auto map.
		/// </summary>
		/// <returns></returns>
		protected virtual AutoPersistenceModel BuildAutoMap()
		{
			return AutoMap.AssemblyOf<Species>()
				.IgnoreBase<BaseObject>();
		}


		#endregion PUBLIC METHODS

	}

}
