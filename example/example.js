var P2PTV = require('../index.js'),
    express = require('express');

var p2ptv = new P2PTV({
  signaling: 8188,  // session management
  upstream: 8000,    // media upstream
  durations: false
});

var app = express();
app.use('/', express.static(__dirname + '/html'));
app.listen(7000, function() {
  console.log('Listening on 7000')
});
