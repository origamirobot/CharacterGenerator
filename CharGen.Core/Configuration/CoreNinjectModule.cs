using Ninject.Modules;

namespace CharGen.Core.Configuration
{

	/// <summary>
	/// Handles mapping the dependencies in this assembly to concrete implementations.
	/// </summary>
	public class CoreNinjectModule : NinjectModule
	{

		/// <summary>
		/// Loads the module into the kernel.
		/// </summary>
		public override void Load()
		{
			Kernel.Bind<IAppSettingsReader>().To<DefaultSettingsReader>().InSingletonScope();
			Kernel.Bind<IConfigurationManager>().To<ConfigManagerWrapper>().InSingletonScope();
			Kernel.Bind<IConfiguration>().To<DefaultConfiguration>().InSingletonScope();
		}

	}

}
