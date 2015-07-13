using System;
using System.Configuration;
using CharGen.Core.Configuration;

namespace CharGen.Data.Configuration
{

	/// <summary>
	/// 
	/// </summary>
	public class DefaultDataConfiguration : IDataConfiguration
	{

		#region PRIVATE PROPERTIES

		private IAppSettingsReader _settingsReader;
		private String _connectionName;

		#endregion PRIVATE PROPERTIES

		#region CONSTRUCTORS


		/// <summary>
		/// Initializes a new instance of the <see cref="DefaultDataConfiguration" /> class.
		/// </summary>
		/// <param name="settingsReader">The settings reader.</param>
		public DefaultDataConfiguration(IAppSettingsReader settingsReader)
		{
			_settingsReader = settingsReader;
		}


		#endregion CONSTRUCTORS

		#region SETTINGS


		/// <summary>
		/// Gets the name of the connection string to use.
		/// </summary>
		public String ConnectionName
		{
			get
			{
				return _settingsReader.ReadOptionalStringAppSetting("ConnectionName", "default");
			}
		}

		/// <summary>
		/// Gets the connection string.
		/// </summary>
		public string ConnectionString
		{
			get { return ConfigurationManager.ConnectionStrings[ConnectionName].ConnectionString; }
		}

		/// <summary>
		/// Gets the database provider.
		/// </summary>
		public string DatabaseProvider
		{
			get { return ConfigurationManager.ConnectionStrings[ConnectionName].ProviderName; }
		}

		/// <summary>
		/// Gets a value indicating whether the ORM should output the SQL it generates.
		/// </summary>
		/// <value>
		/// <c>true</c> if the ORM should output the SQL it generates; otherwise, <c>false</c>.
		/// </value>
		public bool ShowSql
		{
			get { return _settingsReader.ReadOptionalBooleanAppSetting("ShowSql", false); }
		}

		/// <summary>
		/// Gets a value indicating whether to format SQL that is output by the ORM.
		/// </summary>
		/// <value>
		/// <c>true</c> if the SQL should be formatted; otherwise, <c>false</c>.
		/// </value>
		public bool FormatSql
		{
			get { return _settingsReader.ReadOptionalBooleanAppSetting("FormatSql", false); }
		}


		#endregion SETTINGS


	}

}
