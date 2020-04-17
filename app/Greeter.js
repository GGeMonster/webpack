var config = require('./config.json');

// Greeter.js
module.exports = function() {
  var greet = document.createElement('div');
  greet.textContent = "Hi there and greetings!  holle  webpack  service";
  greet.innerHTML = "<div class=\"new\">"+config.greetText+"</div>";
  greet.style.backgroundColor='darkred'
  
  return greet;
};
