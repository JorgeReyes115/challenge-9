function renderLicenseBadge(license) {
    if (license !== "no license") {
      return `![Github license](https://img.shields.io/badge/license-${license}-blue)`;
    }
    return "";
  }

  // creating function for markdown

  function generateMarkdown(data) {
    return `# ${data.title}
    ${renderLicenseBadge(data.license)}


    ## Table of contents

     *[description](#description)
     *[installation](#installation)
     *[Deployed Application](#DeployedApplication)
     *[Languages & Dependencies](#languagesanddependencies)
     *[Contributors](#contributors)
     *[test](#test)

    
    ##description
    ${data.description}
    ##instalation
    ${data.installation}
    ##Deployed appication URL
    ${data.link}
    ## Languages & Dependencies
    ${data.require}
    ## Contributors
    ${data.contributors}
    ##test
    $(data.test);

  `;
  }
   

  


  
  Module.exports = generateMarkdown;