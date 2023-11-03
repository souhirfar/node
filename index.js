const wilder = require ("./information");
var cowsay = require("cowsay");

console.log(cowsay.say({
    text : `I'm a ${wilder.name} from ${wilder.campus}`,
    e : "\\",
    T : "U "
}));