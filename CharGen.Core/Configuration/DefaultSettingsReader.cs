using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Configuration;

namespace CharGen.Core.Configuration
{

	/// <summary>
	/// Default application settings reader for Higgens.
	/// </summary>
	public class DefaultSettingsReader : AppSettingsReader, IAppSettingsReader
	{

		#region PUBLIC PROPERTIES


		/// <summary>
		/// Gets or sets the configuration sections for this application.
		/// </summary>
		public IEnumerable<KeyValueSection> ConfigSections { get; set; }


		#endregion PUBLIC PROPERTIES

		#region CONSTRUCTORS


		/// <summary>
		/// Initializes a new instance of the <see cref="DefaultSettingsReader" /> class.
		/// </summary>
		public DefaultSettingsReader()
		{
			// FIND ALL OF THE CONFIGURATION SECTIONS AND ADD THEM TO PROPERTY.
			var orderedSectionNames = new String[] { "CoreConfiguration", "PriceConfiguration" };
			var configSections = new Collection<KeyValueSection>();
			foreach (String sectionName in orderedSectionNames)
			{
				try
				{
					configSections.Add(GetConfigSection<KeyValueSection>(sectionName));
				}
				catch (Exception ex)
				{
					throw new ApplicationException("Error reading the KeyValueSection " + sectionName + " in app settings.", ex);
				}
			}
			ConfigSections = configSections;
		}


		#endregion CONSTRUCTORS

		#region IAppSettingsReader MEMEBERS


		/// <summary>
		/// Reads the specified app setting from any configuration file.
		/// </summary>
		/// <param name="key">The key to read from.</param>
		/// <returns></returns>
		public string ReadAppSetting(string key)
		{
			foreach (var section in ConfigSections)
			{
				if (section == null)
					continue;
				var val = section.Elements.GetValue(key);
				if (val != null)
					return val;
			}
			return ReadStringAppSettingFromDefaultStore(key);
		}


		#region STRING SETTINGS READERS


		/// <summary>
		/// Gets the string value for a specified key from a specific config file
		/// </summary>
		/// <param name="key">The key to read the setting from.</param>
		/// <param name="configFile">The config file to read the setting from.</param>
		/// <returns>
		/// Returns the string value of the specified key from the specified config file.
		/// </returns>
		/// <exception cref="System.ApplicationException"></exception>
		public string ReadStringAppSetting(string key, string configFile)
		{
			// TRY TO READ VALUE FROM SPECIFIED CONFIGURATION FILE
			var config = GetConfigSection<KeyValueSection>(configFile);
			if (config != null)
			{
				try
				{
					return config.Elements.GetValue(key);
				}
				catch (Exception ex)
				{
					throw new ApplicationException(String.Format("Error reading the string value from {0} in {1} config file.", key, configFile), ex);
				}
			}
			// FALLBACK TO NORMAL WEB.CONFIG IF AVAILABLE
			return ReadStringAppSettingFromDefaultStore(key);

		}

		/// <summary>
		/// Reads the app setting directly from the web.config file.
		/// </summary>
		/// <param name="key">The key to read the setting from.</param>
		/// <returns>
		/// Returns the string value of the app setting from the default config store.
		/// </returns>
		/// <exception cref="System.ApplicationException">Error reading the string value from  + key +  in appSettings.</exception>
		public string ReadStringAppSettingFromDefaultStore(string key)
		{
			try
			{
				return GetValue(key, typeof(String)) as String;
			}
			catch (Exception ex)
			{
				throw new ApplicationException("Error reading the string value from " + key + " in appSettings.", ex);
			}
		}

		/// <summary>
		/// Gets the string value for a specified key. If the key is not present in the config; returns <paramref name="defaultValue" />.
		/// </summary>
		/// <param name="key">The key to read the setting from.</param>
		/// <param name="defaultValue">The default value to return if key isn't present.</param>
		/// <returns>
		/// Returns the value of the key if present; otherwise, the default value
		/// </returns>
		/// <exception cref="System.NotImplementedException"></exception>
		public string ReadOptionalStringAppSetting(string key, string defaultValue)
		{
			try
			{
				String keyValue = ReadAppSetting(key);
				if (keyValue != null)
					return keyValue;
			}
			catch { }

			return defaultValue;
		}


		#endregion STRING SETTINGS READERS

		#region BOOLEAN SETTINGS READERS


		/// <summary>
		/// Reads the boolean value for the specified key from the specified config file
		/// </summary>
		/// <param name="key">The key to read the boolean value from.</param>
		/// <param name="configFile">The configuration file to read the boolean value from.</param>
		/// <returns>
		/// Returns the value of the key if present; otherwise, the default value
		/// </returns>
		/// <exception cref="System.ApplicationException"></exception>
		public bool ReadBooleanAppSetting(string key, string configFile)
		{
			// TRY TO READ VALUE FROM SPECIFIED CONFIGURATION FILE
			var config = GetConfigSection<KeyValueSection>(configFile);
			if (config != null)
			{
				try
				{
					bool val;
					if (Boolean.TryParse(config.Elements.GetValue(key), out val))
						return val;
				}
				catch (Exception ex)
				{
					throw new ApplicationException(String.Format("Error reading the boolean value from {0} in {1} config file.", key, configFile), ex);
				}
			}
			// FALLBACK TO NORMAL WEB.CONFIG IF AVAILABLE
			return ReadBooleanAppSettingFromDefaultStore(key);
		}

		/// <summary>
		/// Reads the boolean value for the specified key directly from the web.config file
		/// </summary>
		/// <param name="key">The key to read the boolean value from.</param>
		/// <returns>
		/// Returns the value of the key from the default configuration store.
		/// </returns>
		/// <exception cref="System.ApplicationException">Error reading the boolean value from  + key +  in appSettings.</exception>
		public bool ReadBooleanAppSettingFromDefaultStore(string key)
		{
			try
			{
				bool val;
				if (Boolean.TryParse(GetValue(key, typeof(String)) as String, out val))
					return val;
			}
			catch (Exception ex)
			{
				throw new ApplicationException("Error reading the boolean value from " + key + " in appSettings.", ex);
			}
			throw new ApplicationException("Error reading the boolean value from " + key + " in appSettings.");
		}

		/// <summary>
		/// Gets the boolean value for a specified key. If the key is not present in the config; returns <paramref name="defaultValue" />.
		/// </summary>
		/// <param name="key">The key to read the setting from.</param>
		/// <param name="defaultValue">The default value to return if key isn't present.</param>
		/// <returns>
		/// Returns the value of the key if present; otherwise, the default value
		/// </returns>
		public bool ReadOptionalBooleanAppSetting(string key, bool defaultValue)
		{
			try
			{
				String keyValue = ReadAppSetting(key);
				if (keyValue != null)
				{
					bool val;
					if (Boolean.TryParse(keyValue, out val))
						return val;
				}
			}
			catch { }
			return defaultValue;
		}


		#endregion BOOLEAN SETTINGS READERS

		#region INTEGER SETTINGS READERS


		/// <summary>
		/// Gets the int value for a specified key. If the key is not present in the config; returns <paramref name="defaultValue" />.
		/// </summary>
		/// <param name="key">The key to read the setting from.</param>
		/// <param name="defaultValue">The default value to return if key isn't present.</param>
		/// <returns>
		/// Returns the value of the key if present; otherwise, the default value
		/// </returns>
		public int ReadOptionalIntAppSetting(string key, int defaultValue)
		{
			try
			{
				String keyValue = ReadAppSetting(key);
				if (keyValue != null)
				{
					int val;
					if (Int32.TryParse(keyValue, out val))
						return val;
				}
			}
			catch { }
			return defaultValue;
		}

		/// <summary>
		/// Reads the int value for the specified key from the specified config file
		/// </summary>
		/// <param name="key">The key to read the int value from.</param>
		/// <param name="configFile">The configuration file to read the int value from.</param>
		/// <returns>
		/// Returns the value of the key from the specified configuration file
		/// </returns>
		/// <exception cref="System.ApplicationException"></exception>
		public int ReadIntAppSetting(string key, string configFile)
		{
			// TRY TO READ VALUE FROM SPECIFIED CONFIGURATION FILE
			var config = GetConfigSection<KeyValueSection>(configFile);
			if (config != null)
			{
				try
				{
					int val;
					if (Int32.TryParse(config.Elements.GetValue(key), out val))
						return val;
				}
				catch (Exception ex)
				{
					throw new ApplicationException(String.Format("Error reading the int value from {0} in {1} config file.", key, configFile), ex);
				}
			}
			// FALLBACK TO NORMAL WEB.CONFIG IF AVAILABLE
			return ReadIntAppSettingFromDefaultStore(key);
		}

		/// <summary>
		/// Reads the int value for the specified key directly from the web.config file
		/// </summary>
		/// <param name="key">The key to read the int value from.</param>
		/// <returns>
		/// Returns the value of the key from the default configuration store.
		/// </returns>
		/// <exception cref="System.ApplicationException">Error reading the int value from  + key +  in appSettings.</exception>
		public int ReadIntAppSettingFromDefaultStore(string key)
		{
			try
			{
				int val;
				if (Int32.TryParse(GetValue(key, typeof(String)) as String, out val))
					return val;
			}
			catch (Exception ex)
			{
				throw new ApplicationException("Error reading the int value from " + key + " in appSettings.", ex);
			}
			throw new ApplicationException("Error reading the int value from " + key + " in appSettings.");
		}


		#endregion INTEGER SETTINGS READERS

		#region DOUBLE SETTINGS READERS


		/// <summary>
		/// Reads the double value for the specified key from the specified config file
		/// </summary>
		/// <param name="key">The key to read the double value from.</param>
		/// <param name="configFile">The configuration file to read the int value from.</param>
		/// <returns>
		/// Returns the value of the key from the specified configuration file
		/// </returns>
		/// <exception cref="System.ApplicationException"></exception>
		public double ReadDoubleAppSetting(string key, string configFile)
		{
			// TRY TO READ VALUE FROM SPECIFIED CONFIGURATION FILE
			var config = GetConfigSection<KeyValueSection>(configFile);
			if (config != null)
			{
				try
				{
					double val;
					if (Double.TryParse(config.Elements.GetValue(key), out val))
						return val;
				}
				catch (Exception ex)
				{
					throw new ApplicationException(String.Format("Error reading the double value from {0} in {1} config file.", key, configFile), ex);
				}
			}
			// FALLBACK TO NORMAL WEB.CONFIG IF AVAILABLE
			return ReadIntAppSettingFromDefaultStore(key);
		}

		/// <summary>
		/// Reads the double value for the specified key directly from the web.config file
		/// </summary>
		/// <param name="key">The key to read the double value from.</param>
		/// <returns>
		/// Returns the value of the key from the default configuration store.
		/// </returns>
		/// <exception cref="System.ApplicationException">Error reading the double value from  + key +  in appSettings.</exception>
		public double ReadDoubleAppSettingFromDefaultStore(string key)
		{
			try
			{
				double val;
				if (Double.TryParse(GetValue(key, typeof(String)) as String, out val))
					return val;
			}
			catch (Exception ex)
			{
				throw new ApplicationException("Error reading the double value from " + key + " in appSettings.", ex);
			}
			throw new ApplicationException("Error reading the double value from " + key + " in appSettings.");
		}

		/// <summary>
		/// Gets the specified configuration section.
		/// </summary>
		/// <typeparam name="T">The configuration section type</typeparam>
		/// <param name="section">The section to get.</param>
		/// <returns>
		/// Returns the specified configuration section
		/// </returns>
		public T GetConfigSection<T>(string section) where T : class
		{
			return ConfigurationManager.GetSection(section) as T;
		}

		/// <summary>
		/// Gets the double value for a specified key. If the key is not present in the config; returns <paramref name="defaultValue" />.
		/// </summary>
		/// <param name="key">The key to read the setting from.</param>
		/// <param name="defaultValue">The default value to return if key isn't present.</param>
		/// <returns>
		/// Returns the value of the key if present; otherwise, the default value
		/// </returns>
		public double ReadOptionalDoubleAppSetting(string key, double defaultValue)
		{
			try
			{
				String keyValue = ReadAppSetting(key);
				if (keyValue != null)
				{
					double val;
					if (Double.TryParse(keyValue, out val))
						return val;
				}
			}
			catch { }
			return defaultValue;
		}


		#endregion DOUBLE SETTINGS READERS


		#endregion IAppSettingsReader MEMEBERS

	}

}
