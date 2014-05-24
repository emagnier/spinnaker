Spinnaker
=========

A CMS written in JavaScript, based on Node.js, Sails.js, Angular and Polymer.

### CURRENTLY IN ACTIVE DEVELOPMENT - NOT READY FOR PRODUCTION USE YET

---

## Config

Sample `config/local.js` file:

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
            database: 'spinnaker',
            schema: true
        }
    }
};
```
