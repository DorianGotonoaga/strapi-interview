import type { Core } from '@strapi/strapi';

const register = ({ strapi }: { strapi: Core.Strapi }) => {
  // register phase
  strapi.customFields.register({
    name: 'badgeColor',
    plugin: 'custom-badge-field',
    type: 'string',
  })
};

export default register;
