import type { StrapiApp } from '@strapi/strapi/admin';
import CollapsibleCollectionTypeComponent from "./extensions/CollapsibleCollectionTypeComponent";

export default {
  config: {
    locales: [],
  },
  bootstrap(app: StrapiApp) {
    console.log(app);
    // inject the CollapsibleCollectionTypeComponent to the left menu of the collection type edit view
      app.getPlugin('content-manager').injectComponent('listView', 'actions', {
          name: 'MyCustomButton',
          Component: CollapsibleCollectionTypeComponent,
      });
  },
};
