import { errors } from '@strapi/utils';
const ValidationError = errors.ValidationError;

export default {
    beforeCreate(event) {
        const { data } = event.params;
        const tags = data.tags
        const connectTags = tags?.connect
        const setTags = tags?.set
        // check the tags, don't allow creating if it doesn't have at least 2 tags
        if (!connectTags && !setTags) {
            throw new ValidationError("An article must have at least 2 tags.");
        }
        if (connectTags?.length < 2 && !setTags) {
            throw new ValidationError("An article must have at least 2 tags.");
        }
        if (setTags?.length < 2 && !connectTags) {
            throw new ValidationError("An article must have at least 2 tags.");
        }
    },
    async beforeUpdate(event) {
        const { data, where } = event.params;
        const tags = data.tags;
        const connectTags = tags?.connect
        const disconnectTags = tags?.disconnect
        // check the tags, don't allow updating if it doesn't have at least 2 tags

        // get the article with existing tags
        const article = await strapi.db.query('api::article.article').findOne({
            where: { id: where.id },
            populate: { tags: { count: true } },
        });
        const tagsCount = article?.tags?.count || 0;
        if (tagsCount + (connectTags ? connectTags.length : 0) - (disconnectTags ? disconnectTags.length : 0) < 2) {
            throw new ValidationError('An article must have at least 2 tags.');
        }
    }
}