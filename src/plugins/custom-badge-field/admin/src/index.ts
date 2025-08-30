import { getTranslation } from './utils/getTranslation';
import { PLUGIN_ID } from './pluginId';
import { Initializer } from './components/Initializer';
import { PluginIcon } from './components/PluginIcon';

export default {
  register(app: any) {

    app.registerPlugin({
      id: PLUGIN_ID,
      initializer: Initializer,
      isReady: false,
      name: PLUGIN_ID,
    });

    app.customFields.register({
      name: 'badgeColor',
      plugin: PLUGIN_ID,
      pluginId: PLUGIN_ID,
      type: 'string',
      icon: PluginIcon,
      intlLabel: {
        id: `${PLUGIN_ID}.customField.label`,
        defaultMessage: 'Badge Color',
      },
      intlDescription: {
        id: `${PLUGIN_ID}.customField.description`,
        defaultMessage: 'Select a badge color',
      },
      components: {
        Input: async () =>
          import('./components/Input').then((module) => ({
            default: module.Input,
          })),
      },
      options: {
        // declare options here
      },
    })

  },

  async registerTrads({ locales }: { locales: string[] }) {
    return Promise.all(
      locales.map(async (locale) => {
        try {
          const { default: data } = await import(`./translations/${locale}.json`);

          return { data, locale };
        } catch {
          return { data: {}, locale };
        }
      })
    );
  },
};
