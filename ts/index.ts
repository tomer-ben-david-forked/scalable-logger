let scalable_winston = require('winston');

export function logEvery1000(level: string, msg: string) {
    if ((Math.round(Math.random() * 1000) + 1) % 1000 === 0) {
        scalable_winston.log(level, msg);
    } else {
        scalable_winston.silly(msg);
    }
}

