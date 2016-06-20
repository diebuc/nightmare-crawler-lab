var Nightmare = require('nightmare');
require('nightmare-download-manager')(Nightmare);
var nightmare = Nightmare({
    show: true
});
nightmare.on('download', function (state, downloadItem) {
    if (state == 'started') {
        nightmare.emit('download', 'downloads/file.zip', downloadItem);
    }
});

nightmare
    .downloadManager()
    .goto('https://github.com/mjul/nightmare-crawler-lab')
    .click('a[href="/mjul/nightmare-crawler-lab/archive/master.zip"]')
    .wait('downloads-complete')
    .end()
    .then(function () {
        console.log('done');
    })
    .catch(function(e) {
        console.log('ERROR: ' + JSON.stringify(e))
    })

