using System;
using System.Collections.Generic;

namespace CharGen.Data.Models
{

	/// <summary>
	/// 
	/// </summary>
	public class Class : BaseObject
	{

		/// <summary>
		/// Gets or sets the name.
		/// </summary>
		public virtual String Name { get; set; }

		/// <summary>
		/// Gets or sets the description.
		/// </summary>
		public virtual String Description { get; set; }

		/// <summary>
		/// Gets or sets the skills.
		/// </summary>
		public virtual IList<Skill> Skills { get; set; }

		/// <summary>
		/// Gets or sets the number of trained skills this class starts with.
		/// </summary>
		public virtual Int32 TrainedSkills { get; set; }

	}

}
