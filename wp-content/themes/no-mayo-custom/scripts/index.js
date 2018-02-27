console.log("welcome to index.js");

// Welcome to index.js
//
// You can write ES6 here! It will be compiled by webpack using Babel into ES5.
//
// ヽ(´▽`)/

// Stricter checking of small-but-often-problematic JS errors
("use strict");

// Instruct webpack to compile Sass
const sass = require("../sass/style.scss");

// Load dependencies
const userAgent = new UserAgent().parse(navigator.userAgent);

// Import component scripts and template scripts
const headerScripts = require("../scripts/components/header.js").headerScripts;

// Store any other constant values for this project
const greeting = "Hola World";

document.addEventListener("DOMContentLoaded", function() {
  console.log(greeting);
  console.log("your document has loaded");

  // Use the userAgent information to add useful classes to the body element,
  // which can be used to finely adjust styling when needed
  applyUserAgentClasses(userAgent);

  headerScripts.run();
});

function applyUserAgentClasses(userAgent) {
  document.body.classList.add(userAgent.browser.toLowerCase());

  if (userAgent.isDesktop) {
    document.body.classList.add("desktop");
  } else if (userAgent.isMobile) {
    document.body.classList.add("mobile");
  }
}
