# 🚀 Getting started with Strapi

### `develop`

```
npm run develop
```

## ⚙️ Registering the custom plugin
First, we need to build the custom plugin. Navigate to the plugin directory and run:
```cd src/plugins/custom-badge-field
npm install
npm run build
```

To register the plugin, you need to add it to the `./config/plugins.ts` file of your Strapi project:
```
'custom-badge-field': {
    enabled: true,
    resolve: './src/plugins/custom-badge-field'
},
```

### 🛠️ How to add the custom field to a content type
1. Go to the Content-Types Builder in the Strapi admin panel.
2. Select the content type you want to add the custom field to or create a new one.
3. Click on the "Add New Field" button.
4. In the field type selection modal, click on the "Custom" tab.
5. Select the "Badge Color" field from the list of custom fields.
6. Configure the field settings as needed (e.g., name).
7. Click on the "Finish" button to add the field to your content type.
8. Save the content type to apply the changes.
9. Now you can use the "Badge Color" custom field in your content type to select a color badge.

## 🧪 Testing the relationship validation article - tags
1. Go to the "Articles" section in the Strapi admin panel and try to create a new article.
2. Attempt to save the article with less than 2 tags selected.
3. You should see a validation error message indicating that at least 2 tags are required.
4. Now, select 2 or more tags and save the article again. You should be able to save the article successfully this time.
5. This confirms that the relationship validation for a minimum of 2 tags is working correctly.