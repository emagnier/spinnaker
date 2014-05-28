Spinnaker
=========

A CMS written in JavaScript, based on Node.js, Sails.js, Angular and Polymer.

### CURRENTLY IN ACTIVE DEVELOPMENT - NOT READY FOR PRODUCTION USE YET

[![Build Status](https://travis-ci.org/emagnier/spinnaker.svg)](https://travis-ci.org/emagnier/spinnaker)

---

## Todo

### Bases

- Finish the main CMS models and create controllers for special CRUD data.
- Models: Validate each data when something is added or updated.
- Models: Delete associated data if needded.
- BackEnd: Give nice error messages in the Rest API if something is wrong.
- UI: Implement each screens to manage the base features of the CMS.
- UI: Create WebComponents of each field types of the CMS.
- Implement tests for each cases.

### Then

- Add some security access (admin acces or no access).
- Add a simple user managment.
- Be abble to login with Google, Twitter, Facebook, Github accounts...
- Add a publishing module. So only publicated data will be accessible publicaly.
- Add a URL resolver and helpers functions to crunch easily the data to display in a web page (should be probably a separated module).
- Add a basic medias manager.

### Later

- Review the UI and improve the user experience: drag & drop, contextual information, nice UI...
- Improve the media manager: make media files more dynamic (e.g.: rename files easily and automatically update paths in contents, etc...).
- Add support to Amazon s3 in the media manager.
- Be abble to dynamically resize images in the content.
- Add content versionning.
- Add multi level access for the users (make none available some features / sections of the CMS).
- Create documentation.
- Create a nice logo.


## Sample Config

Right now, the CMS is only tested with MongoDB. But it should works with other DB systems supported by [Warterline](https://github.com/balderdashy/waterline).
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

## Licence

[MIT](http://opensource.org/licenses/MIT) © Etienne Magnier
