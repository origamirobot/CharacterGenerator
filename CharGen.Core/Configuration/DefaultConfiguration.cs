using System;
using System.Net.Mail;


namespace CharGen.Core.Configuration
{

	/// <summary>
	/// Default configuration class for Skate Lurker.
	/// </summary>
	public class DefaultConfiguration : IConfiguration
	{

		#region PRIVATE PROPERTIES


		/// <summary>
		/// Gets the settings reader.
		/// </summary>
		protected IAppSettingsReader SettingsReader { get; private set; }

		/// <summary>
		/// Gets the configuration manager.
		/// </summary>
		protected IConfigurationManager ConfigurationManager { get; private set; }


		#endregion PRIVATE PROPERTIES

		#region CONSTRUCTORS


		/// <summary>
		/// Initializes a new instance of the <see cref="DefaultConfiguration" /> class.
		/// </summary>
		/// <param name="settingsReader">The settings reader.</param>
		/// <param name="configurationManager">The configuration manager.</param>
		public DefaultConfiguration(IAppSettingsReader settingsReader, IConfigurationManager configurationManager)
		{
			SettingsReader = settingsReader;
			ConfigurationManager = configurationManager;
		}


		#endregion CONSTRUCTORS

		#region GENERAL SETTINGS


		/// <summary>
		/// Gets the name of this application.
		/// </summary>
		public String ApplicationName
		{
			get { return SettingsReader.ReadOptionalStringAppSetting("ApplicationName", "Character Generator"); }
		}

		/// <summary>
		/// Gets or sets the application URL.
		/// </summary>
		public String ApplicationURL
		{
			get { return SettingsReader.ReadOptionalStringAppSetting("ApplicationName", "Character Generator"); }
		}


		#endregion GENERAL SETTINGS

		#region DATA SETTINGS


		/// <summary>
		/// Gets the name of the connection string to use.
		/// </summary>
		public String ConnectionName
		{
			get { return SettingsReader.ReadOptionalStringAppSetting("ConnectionName", "DefaultConnection"); }
		}

		/// <summary>
		/// Gets a value indicating whether the ORM should output the SQL it generates.
		/// </summary>
		/// <value>
		/// <c>true</c> if the ORM should output the SQL it generates; otherwise, <c>false</c>.
		/// </value>
		public bool ShowSql
		{
			get { return SettingsReader.ReadOptionalBooleanAppSetting("ShowSql", false); }
		}

		/// <summary>
		/// Gets a value indicating whether to format SQL that is output by the ORM.
		/// </summary>
		/// <value>
		/// <c>true</c> if the SQL should be formatted; otherwise, <c>false</c>.
		/// </value>
		public bool FormatSql
		{
			get { return SettingsReader.ReadOptionalBooleanAppSetting("FormatSql", false); }
		}

		/// <summary>
		/// Gets the connection string.
		/// </summary>
		public String ConnectionString
		{
			get { return ConfigurationManager.ConnectionStrings[ConnectionName].ConnectionString; }
		}

		/// <summary>
		/// Gets the database provider.
		/// </summary>
		public String DatabaseProvider
		{
			get { return ConfigurationManager.ConnectionStrings[ConnectionName].ProviderName; }
		}


		#endregion DATA SETTINGS

	}

}
