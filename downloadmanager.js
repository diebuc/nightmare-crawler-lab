var Nightmare = require('nightmare');
require('nightmare-download-manager')(Nightmare);
var nightmare = Nightmare({
    show: true
});
nightmare.on('download', function (state, downloadItem) {
    if (state == 'started') {
        // second arg is path to the file destination
        nightmare.emit('download', 'downloads/master.zip', downloadItem);
    }
});

nightmare
    .viewport(1200, 800)
    .downloadManager()
    .goto('https://github.com/mjul/nightmare-crawler-lab')
    .click('a[href="/mjul/nightmare-crawler-lab/archive/master.zip"]')
    //.wait('downloads-complete')
    .waitDownloadsComplete()
    .end()
    .then(function () {
        console.log('done');
    })
    .catch(function (e) {
        console.log('ERROR: ' + JSON.stringify(e))
    })

