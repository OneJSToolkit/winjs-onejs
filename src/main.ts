/// <reference path="AppRoot/AppRoot.d.ts" />
import AppRoot = require('./AppRoot/AppRoot');

if (document.body) {
    initialize();
}
else {
    document.onload = initialize;
}

function initialize() {
    var app = new AppRoot();
    var body = document.body;

    // Wire up dispose on unload.
    body.addEventListener('dispose', function() {
        app.dispose();
    });

    // Wire up resize on window resize.
    body.addEventListener('resize', function() {
        app.resize();
    });

    body.appendChild(app.render());
    app.activate();
}
