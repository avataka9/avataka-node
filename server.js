var log = require('./logger')(module);
var db = require('./db');
db.connect();

var user = require('./user');

function run() {
    var vasya = new user.User("Вася");
    var petya = new user.User("Петя");

    vasya.hello(petya);

    log(db.getPhrase("Run successful"));
}

if (module.parent) {
    exports.run = run;
} else {
    run();
}
