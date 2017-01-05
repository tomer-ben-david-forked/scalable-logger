"use strict";
var scalable_winston = require('winston');
function logEvery1000(level, msg) {
    if ((Math.round(Math.random() * 1000) + 1) % 1000 === 0) {
        scalable_winston.log(level, msg);
    }
    else {
        scalable_winston.silly(msg);
    }
}
exports.logEvery1000 = logEvery1000;
