# webpack-entry-filter-plugin

## description
Filter your webpack entry by entry glob pattern and 
🚀 your webpack dev speed.

## install
```bash
npm install webpack-entry-filter-plugin --save-dev
touch .entryrc
```

```text
# .entryrc
# define your entry glob pattern
# for example:
live/**/
events/upgrade
```

after that, you can use this plugin in your webpack config file.

```javascript
const { WebpackEntryFilterPlugin } = require('webpack-entry-filter-plugin');
module.exports = {
    // your webpack config
    plugins: [
        // only in dev mode
        process.env.NODE_ENV === 'development' ? new WebpackEntryFilterPlugin() : null
        
    ]
}
```
when you run webpack, it will only bundle the entry files that match the glob pattern.
like the example above, it will only bundle the all pages in **live** folder and page in **events/upgrade** folder;

### **important**
You should always use this plugin in dev mode。

