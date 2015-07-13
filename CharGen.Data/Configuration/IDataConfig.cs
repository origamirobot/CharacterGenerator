using System;

namespace CharGen.Data.Configuration
{

	/// <summary>
	/// Defines a contract that all data configuration classes must implement.
	/// </summary>
	public interface IDataConfiguration
	{

		/// <summary>
		/// Gets the name of the connection string to use.
		/// </summary>
		String ConnectionName { get; }

		/// <summary>
		/// Gets a value indicating whether the ORM should output the SQL it generates.
		/// </summary>
		/// <value><c>true</c> if the ORM should output the SQL it generates; otherwise, <c>false</c>.
		/// </value>
		bool ShowSql { get; }

		/// <summary>
		/// Gets a value indicating whether to format SQL that is output by the ORM.
		/// </summary>
		/// <value><c>true</c> if the SQL should be formatted; otherwise, <c>false</c>.</value>
		bool FormatSql { get; }

		/// <summary>
		/// Gets the connection string.
		/// </summary>
		string ConnectionString { get; }

		/// <summary>
		/// Gets the database provider.
		/// </summary>
		string DatabaseProvider { get; }

	
	}

}
