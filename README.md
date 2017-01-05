# scalable-logging

Example usage:

```javascript
var scalableLogger = require('scalable-logger');

for (var _i = 0; _i < 2000; _i++) {
    logEvery1000('info', 'hi');
}
```

output:

```commandline
info: hi
info: hi
info: hi
```

Note that as we don't hold any counters the logEvery100 is just an estimator, it would roughly log every 1000 with law of large numbers at the long run it would be around every 1000 log lines.

It's more of an idea, if you have more feature requests please let me know!!! :)