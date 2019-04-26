var ncp = require("ncp");

ncp("dist", "gg", callback);

function callback(){
  console.log('is-down')
}