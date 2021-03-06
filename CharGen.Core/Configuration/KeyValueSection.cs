﻿using System;
using System.Configuration;

namespace CharGen.Core.Configuration
{

	/// <summary>
	/// Represents a section in the configuration of key / value pairs.
	/// </summary>
	public class KeyValueSection : ConfigurationSection
	{

		/// <summary>
		/// Gets the key / value elements in this section.
		/// </summary>
		[ConfigurationProperty("elements")]
		public KeyValueElementCollection Elements { get { return this["elements"] as KeyValueElementCollection; } }

	}

	/// <summary>
	/// Represents a particular key / value pair from the configuration.
	/// </summary>
	public class KeyValueElement : ConfigurationElement
	{

		/// <summary>
		/// Gets or sets the identifying key for this element.
		/// </summary>
		[ConfigurationProperty("key", IsRequired = true)]
		public String Key
		{
			get { return this["key"] as String; }
			set { this["key"] = value; }
		}

		/// <summary>
		/// Gets or sets the configuration value for this element.
		/// </summary>
		[ConfigurationProperty("value", IsRequired = true)]
		public String Value
		{
			get { return this["value"] as String; }
			set { this["value"] = value; }
		}

	}

	/// <summary>
	/// Represents a collection of key / value pairs from the configuration.
	/// </summary>
	public class KeyValueElementCollection : ConfigurationElementCollection
	{

		#region INDEXER PROPERTY


		/// <summary>
		/// Gets or sets a key / value element of this configuration element.
		/// </summary>
		/// <param name="index">The index of the key / value element to get.</param>
		/// <returns></returns>
		public KeyValueElement this[int index]
		{
			get { return base.BaseGet(index) as KeyValueElement; }
			set
			{
				if (base.BaseGet(index) != null)
					base.BaseRemoveAt(index);
				BaseAdd(index, value);
			}
		}


		#endregion INDEXER PROPERTY

		#region PUBLIC METHODS


		/// <summary>
		/// When overridden in a derived class, creates a new <see cref="T:System.Configuration.ConfigurationElement" />.
		/// </summary>
		/// <returns>
		/// A new <see cref="T:System.Configuration.ConfigurationElement" />.
		/// </returns>
		protected override ConfigurationElement CreateNewElement()
		{
			return new KeyValueElement();
		}

		/// <summary>
		/// Gets the element key for a specified configuration element when overridden in a derived class.
		/// </summary>
		/// <param name="element">The <see cref="T:System.Configuration.ConfigurationElement" /> to return the key for.</param>
		/// <returns>
		/// An <see cref="T:System.Object" /> that acts as the key for the specified <see cref="T:System.Configuration.ConfigurationElement" />.
		/// </returns>
		protected override object GetElementKey(ConfigurationElement element)
		{
			return ((KeyValueElement)element).Key;
		}

		/// <summary>
		/// Gets the value for the provided key.
		/// </summary>
		/// <param name="key">The key to get the value for.</param>
		/// <returns></returns>
		public String GetValue(String key)
		{
			return GetValueOrDefault(key, null);
		}

		/// <summary>
		/// Gets the value for the provided key. If the key isn't found this returns the default value param
		/// </summary>
		/// <param name="key">The key to get the value for.</param>
		/// <param name="defaultValue">The default value to return if the key isnt present.</param>
		/// <returns></returns>
		public String GetValueOrDefault(String key, String defaultValue)
		{
			var item = BaseGet(key) as KeyValueElement;
			return (item == null ? defaultValue : item.Value);
		}


		#endregion PUBLIC METHODS

	}

}
