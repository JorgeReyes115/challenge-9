//adding packages needed for the application.

const fs = Require("fs");
const inquirer = Require("inquirer");
const generatorMarkdown = Require("./utils/generateMarkdown");


//array forquestions

const questions = [

{
    type: "input",
    name: "title",
    message: "Please name the project",
 },
{
    type: "input",
    name: "description",
    message: "please describe your project.",
 },
{
    type: "input",
    name: "photos",
    message: "Please provide path to the image you would like to use as a screenshoot.",
 },
{
    type: "input",
    name: "deployed application",
    message: "Please provide link to the deployed application. (if deployed)",
 },
{
    type: "input",
    name: "dependencies",
    message: "Please add any dependencies for this app to be able to run.",
 },
{
    type: "input",
    name: "license",
    message: "Please provide the license that you would like to use for this project.",
 },
{
    type: "input",
    name: "contribution",
    message: "please name any contributors that aidded on the creation of the project.",
 },
{
    type: "input",
    name: "creator",
    message: "Please provide your github name.",
 },
];


function writeToFile(fileName, data) {
    fs.writeFileSync(fileName,data );

}



function init() {
  inquirer.prompt(questions).then((responses) => {
    console.log("Creating README.md File...");
    writeToFile("README.md", generatorMarkdown({ ...responses }));
  });
}


init();