const fs = require("fs");
const generatePage = require("./src/page-template.js");
const profileDataArgs = process.argv.slice(2);

// const username = profileDataArgs[0];
// const github = profileDataArgs[1];
// this is the same as writing:
const [username, github] = profileDataArgs;

fs.writeFile("./index.html", generatePage(username, github), (err) => {
  if (err) throw new Error(err);
  console.log("Portfolio complete! Check out index.html to see the output!");
});

fs.writeFile("index.html", generatePage(username, github), (err) => {
  if (err) throw err;
  console.log("Portfolio complete! Check out index.html to see the output!");
});
