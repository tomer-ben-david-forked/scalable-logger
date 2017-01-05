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
