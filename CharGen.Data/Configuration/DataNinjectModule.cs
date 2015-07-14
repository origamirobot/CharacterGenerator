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
			Kernel.Bind<INHibernateConfiguration>().To<SQLiteNHibernateConfig>().InSingletonScope();
			Kernel.Bind<ISessionFactory>().ToConstant(Kernel.Get<INHibernateConfiguration>().GetConfiguration().BuildSessionFactory());
			Kernel.Bind<ISession>().ToMethod(x => x.Kernel.Get<ISessionFactory>().OpenSession()).InTransientScope();
			Kernel.Bind<ISpeciesRepository>().To<SpeciesRepository>().InTransientScope();
			Kernel.Bind<IWeaponRepository>().To<WeaponRepository>().InTransientScope();
			Kernel.Bind<IServiceRepository>().To<ServiceRepository>().InTransientScope();
			Kernel.Bind<IEquipmentRepository>().To<EquipmentRepository>().InTransientScope();
			Kernel.Bind<IEquipmentTypeRepository>().To<EquipmentTypeRepository>().InTransientScope();
			Kernel.Bind<IArmorRepository>().To<ArmorRepository>().InTransientScope();
			Kernel.Bind<IArmorTypeRepository>().To<ArmorTypeRepository>().InTransientScope();
			Kernel.Bind<IArmorAvailabilityRepository>().To<ArmorAvailabilityRepository>().InTransientScope();
			Kernel.Bind<IAgeRepository>().To<AgeRepository>().InTransientScope();
			Kernel.Bind<ISkillRepository>().To<SkillRepository>().InTransientScope();
			Kernel.Bind<IClassRepository>().To<ClassRepository>().InTransientScope();
		}

	}

}
