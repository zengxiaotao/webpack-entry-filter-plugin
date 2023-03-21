# webpack-entry-filter-plugin

## description
filter your webpack entry by entry glob pattern and 
boost your webpack dev speed.

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
const WebpackEntryFilterPlugin = require('webpack-entry-filter-plugin');
module.exports = {
    // your webpack config
    plugins: [
        new WebpackEntryFilterPlugin()
    ]
}
```
when you run webpack, it will only bundle the entry files that match the glob pattern.
like the example above, it will only bundle the all pages in **live** folder and events/upgrade page;

