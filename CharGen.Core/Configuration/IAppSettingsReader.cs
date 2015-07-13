using System;

namespace CharGen.Core.Configuration
{

	/// <summary>
	/// Defines a contract that all Higgens application settings readers must implement.
	/// </summary>
	/// <remarks>
	/// This interface can be mocked for unit testing configuration settings.
	/// </remarks>
	public interface IAppSettingsReader
	{

		#region VALUE METHODS


		/// <summary>
		/// Gets the value of the specified key and type
		/// </summary>
		/// <param name="key">The key to get the value for.</param>
		/// <param name="type">The type of the value to get.</param>
		/// <returns>Returns the value of the specified key</returns>
		Object GetValue(String key, Type type);

		/// <summary>
		/// Reads the specified app setting from any configuration file.
		/// </summary>
		/// <param name="key">The key to read from.</param>
		/// <returns>Returns the value of the specified app setting</returns>
		String ReadAppSetting(String key);

		/// <summary>
		/// Gets the specified configuration section.
		/// </summary>
		/// <typeparam name="T">The configuration section type</typeparam>
		/// <param name="section">The section to get.</param>
		/// <returns>Returns the specified configuration section</returns>
		T GetConfigSection<T>(String section) where T : class;


		#endregion VALUE METHODS

		#region STRING SETTINGS


		/// <summary>
		/// Gets the string value for a specified key from a specific config file.
		/// </summary>
		/// <param name="key">The key to read the setting from.</param>
		/// <param name="configFile">The config file to read the setting from.</param>
		/// <returns>Returns the string value of the specified key from the specified config file.</returns>
		String ReadStringAppSetting(String key, String configFile);

		/// <summary>
		/// Reads the app setting directly from the web.config file.
		/// </summary>
		/// <param name="key">The key to read the setting from.</param>
		/// <returns>Returns the string value of the app setting from the default config store.</returns>
		String ReadStringAppSettingFromDefaultStore(String key);

		/// <summary>
		/// Gets the string value for a specified key. If the key is not present in the config; returns <paramref name="defaultValue"/>.
		/// </summary>
		/// <param name="key">The key to read the setting from.</param>
		/// <param name="defaultValue">The default value to return if key isn't present.</param>
		/// <returns>Returns the value of the key if present; otherwise, the default value</returns>
		String ReadOptionalStringAppSetting(String key, String defaultValue);


		#endregion STRING SETTINGS

		#region BOOLEAN SETTINGS


		/// <summary>
		/// Reads the boolean value for the specified key from the specified config file
		/// </summary>
		/// <param name="key">The key to read the boolean value from.</param>
		/// <param name="configFile">The configuration file to read the boolean value from.</param>
		/// <returns>Returns the value of the key if present; otherwise, the default value</returns>
		bool ReadBooleanAppSetting(String key, String configFile);

		/// <summary>
		/// Reads the boolean value for the specified key directly from the web.config file
		/// </summary>
		/// <param name="key">The key to read the boolean value from.</param>
		/// <returns>Returns the value of the key from the default configuration store.</returns>
		bool ReadBooleanAppSettingFromDefaultStore(String key);

		/// <summary>
		/// Gets the boolean value for a specified key. If the key is not present in the config; returns <paramref name="defaultValue"/>.
		/// </summary>
		/// <param name="key">The key to read the setting from.</param>
		/// <param name="defaultValue">The default value to return if key isn't present.</param>
		/// <returns>Returns the value of the key if present; otherwise, the default value</returns>
		bool ReadOptionalBooleanAppSetting(String key, bool defaultValue);


		#endregion BOOLEAN SETTINGS

		#region INTEGER SETTINGS


		/// <summary>
		/// Reads the int value for the specified key from the specified config file
		/// </summary>
		/// <param name="key">The key to read the int value from.</param>
		/// <param name="configFile">The configuration file to read the int value from.</param>
		/// <returns>Returns the value of the key from the specified configuration file</returns>
		int ReadIntAppSetting(String key, String configFile);

		/// <summary>
		/// Reads the int value for the specified key directly from the web.config file
		/// </summary>
		/// <param name="key">The key to read the int value from.</param>
		/// <returns>Returns the value of the key from the default configuration store.</returns>
		int ReadIntAppSettingFromDefaultStore(String key);

		/// <summary>
		/// Gets the int value for a specified key. If the key is not present in the config; returns <paramref name="defaultValue"/>.
		/// </summary>
		/// <param name="key">The key to read the setting from.</param>
		/// <param name="defaultValue">The default value to return if key isn't present.</param>
		/// <returns>Returns the value of the key if present; otherwise, the default value</returns>
		int ReadOptionalIntAppSetting(String key, int defaultValue);


		#endregion INTEGER SETTINGS

		#region DOUBLE SETTINGS


		/// <summary>
		/// Reads the double value for the specified key from the specified config file
		/// </summary>
		/// <param name="key">The key to read the double value from.</param>
		/// <param name="configFile">The configuration file to read the int value from.</param>
		/// <returns>Returns the value of the key from the specified configuration file</returns>
		double ReadDoubleAppSetting(String key, String configFile);

		/// <summary>
		/// Reads the double value for the specified key directly from the web.config file
		/// </summary>
		/// <param name="key">The key to read the double value from.</param>
		/// <returns>Returns the value of the key from the default configuration store.</returns>
		double ReadDoubleAppSettingFromDefaultStore(String key);

		/// <summary>
		/// Gets the double value for a specified key. If the key is not present in the config; returns <paramref name="defaultValue"/>.
		/// </summary>
		/// <param name="key">The key to read the setting from.</param>
		/// <param name="defaultValue">The default value to return if key isn't present.</param>
		/// <returns>Returns the value of the key if present; otherwise, the default value</returns>
		double ReadOptionalDoubleAppSetting(String key, double defaultValue);


		#endregion DOUBLE SETTINGS

	}

}
