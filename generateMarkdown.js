// function to generate markdown for README
const generateMarkdown = (data, licenseData) => {
    return `# ${data.title}
   
## Installation:

${data.installation}

## Usage

${data.usage}

## Credits

${data.credit1},  ${data.credit1Git}
${data.credit2},  ${data.credit2Git}
${data.credit3},  ${data.credit3Git}
${data.credit4},  ${data.credit4Git}

## License

${licenseData}


    ## Description: 
${data.briefDescription}
## Some more shit here:
${data.alsoThis}


  `;
  };
  
  module.exports = generateMarkdown;

//   ![${data.imageAltTag}](${imageURL})
  