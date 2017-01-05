# scalable-logging

Example usage:

```commandline
npm install scalable-logger --save
```

```javascript
"use strict";

var scalableLogger = require("scalable-logger");

for (var _i = 0; _i < 5000; _i++) {
    scalableLogger.logEvery1000('info', 'hi');
}
```

output:

```commandline
info: hi
info: hi
info: hi
info: hi
```

Note that as we don't hold any counters the logEvery100 is just an estimator, it would roughly log every 1000 with law of large numbers at the long run it would be around every 1000 log lines.

It's more of an idea, if you have more feature requests please let me know!!! :)

All the loggins which are not logged are actually logged with `silly` log level.