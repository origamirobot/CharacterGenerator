using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Text;
using System.Threading.Tasks;

namespace CharGen.Core.Configuration
{

	/// <summary>
	/// Configuration class for all SkateLurker configurations.
	/// </summary>
	public interface IConfiguration
	{

		#region CORE SETTINGS


		/// <summary>
		/// Gets the name of this application.
		/// </summary>
		string ApplicationName { get; }

		/// <summary>
		/// Gets or sets the application URL.
		/// </summary>
		string ApplicationURL { get; }


		#endregion CORE SETTINGS

		#region DATA SETTINGS


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


		#endregion DATA SETTINGS

	}

}
