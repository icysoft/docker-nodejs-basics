/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

var restify = require('restify');

var server = restify.createServer();
server.get('/time', function (req, res, next) {
    var date = new Date();
    res.send({
        process: process.pid,
        time: [
            date.getHours(),
            date.getMinutes(),
            date.getSeconds(),
            date.getMilliseconds()
        ].join(':')});
    next();
});

server.listen(8085);