using CharGen.Data.Configuration;
using CharGen.Data.Repositories;
using NHibernate;
using Ninject;
using Ninject.Modules;

namespace Karaoke.Data.Configuration
{

	/// <summary>
	/// 
	/// </summary>
	public class DataNinjectModule : NinjectModule
	{

		/// <summary>
		/// Loads the module into the kernel.
		/// </summary>
		public override void Load()
		{
			Kernel.Bind<IDataConfiguration>().To<DefaultDataConfiguration>().InSingletonScope();
			Kernel.Bind<INHibernateConfiguration>().To<DefaultNHibernateConfig>().InSingletonScope();
			Kernel.Bind<ISessionFactory>().ToConstant(Kernel.Get<INHibernateConfiguration>().GetConfiguration().BuildSessionFactory());
			Kernel.Bind<ISession>().ToMethod(x => x.Kernel.Get<ISessionFactory>().OpenSession()).InTransientScope();

			Kernel.Bind<ISpeciesRepository>().To<SpeciesRepository>().InTransientScope();
		}

	}

}
