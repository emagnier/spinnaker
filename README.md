node-cms
========

A CMS written in JavaScript, based on Node.js, Sails.js, Backbone and Polymer.


## DataBase

### DB Connection

```js
module.exports = {
    port: process.env.PORT || 1337,
    environment: process.env.NODE_ENV || 'development',
    models: {
        connection: 'mongodbServer'
    },
    connections: {
        mongodbServer: {
            adapter: 'sails-mongo',
            host: 'localhost',
            port: 27017,
            user: '',
            password: '',
            database: 'node-cms',
            schema: true
        }
    }
};
```

### Update the Sample Data

#### Source Control -->  MongodDB

Go to the `LVLWebsite` folder, then run:
```
mongorestore sample_data --drop
```

#### MongodDB --> Source Control

Go to the `LVLWebsite` folder, then run:
```
mongodump --out sample_data --db lvl-website
```

## Backup the Node.js & Bower dependencies

```
tar -zcvf node_modules.tgz node_modules
tar -zcvf bower_components.tgz assets/bower_components
```
