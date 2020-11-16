// function to generate markdown for README
const generateMarkdown = (data, licenseData) => {
    return `# ${data.title}

 ![${data.imageAltTag}](${data.imageURL})
 
# Table of Contents
* [Description](Description)
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

 ## Description: 
 ${data.briefDescription}
 
 ${data.alsoThis}
    
 ## Installation:
 
 1. ${data.installation1}
 1. ${data.installation2}
 
 ## Usage
 
 ${data.usage}
 
 ## Credits
 | ${data.credit1}| ${data.credit1Git}|
 |----------------|-------------------|

## License 
${licenseData}





  `;
  };
  
  module.exports = generateMarkdown;
  