// Example from documentation
// See: https://github.com/rosshinkley/nightmare-inline-download
//
// To run: `node downloadinline.js`

// NOTE - there is currently a bug in Nightmare 2.5.1 that causes a MODULE_NOT_FOUND error when running this

var Nightmare = require('nightmare');
require('nightmare-inline-download')(Nightmare);
var nightmare = Nightmare();

var downloadInfo = nightmare
    .goto('https://github.com/segmentio/nightmare')
    .click('a[href="/segmentio/nightmare/archive/master.zip"]')
    // this will move the download to this file (relative to current directory)
    .download('downloads/master.zip')
    .end()
    .then(function (val) {
        console.log('DONE:', val)
    })
    .catch(function (error) {
        console.log("ERROR:", error)
    });
