const fs = require('fs'); // Grabs FILE SYSTEM
const inquirer = require('inquirer'); // Grabs INQUIRER
const chooseLicense = require('./Chooselicense.js');
const generateMarkdown = require('./generateMarkdown.js');

const init = async () => {

    try {
        const data = await inquirer.prompt([
            { // TITLE OF PROJECT
                type: 'input',
                name: 'title',
                message: 'What is your project Title?',
            },
            { // HAS IMAGE?
                type: 'confirm',
                name: 'imageBoolean',
                message: 'Do you have an image for your README?',
                default: './images/default-selection.jpg',
            },
            { // IF IMAGE, ALT TAG FOR IMAGE
                type: 'input',
                name: 'imageAltTag',
                message: 'Please enter an Alt Tag for your image.',
                when: function (data) {
                    return data.imageBoolean;
                },
                default: 'NO-IMAGE-TAG'
            },
            { // IF IMAGE, FILE LOCATION FOR IMAGE
                type: 'input',
                name: 'imageURL',
                message: 'Please enter your image file location or URL.',
                when: function (data) {
                    return data.imageBoolean;
                },
                default: './images/default-image.jpg',
            },



            { // PROJECT DESCRIPTION
                type: 'input',
                name: 'briefDescription',
                message: 'Please briefly describe your project',
                default: 'PROJECT DESCRIPTION LINE ONE HERE'
            },
            { // Additional Description
                type: 'input',
                name: 'alsoThis',
                message: 'Please add any additional description.',
                default: 'PROJECT DESCRIPTION LINE TWO HERE'
            },



            { // Additional Description
                type: 'input',
                name: 'credit1',
                message: 'Who is the primary contriubutor?',
                default: 'ENTER NAME HERE'
            },
            { // Additional Description
                type: 'input',
                name: 'alsoThis',
                message: 'Please add any additional description.',
                default: 'PROJECT DESCRIPTION LINE TWO HERE'
            },
            




            { // Installation instructions 1
                type: 'input',
                name: 'installation1',
                message: 'Please add your installation instructions.',
                default: 'INSTALLATION INSTRUCTIONS HERE'
            },

            { // Additional Description
                type: 'input',
                name: 'installation2',
                message: 'Please add any additional installation instructions.',
                default: 'INSTALLATION INSTRUCTIONS HERE'
            },


            { //ADD a license BOOLEAN
                type: 'confirm',
                name: 'licenseBoolean',
                message: 'Would you like to add a licence',
            },
            { //If license BOOLEAN select YEAR
                type: 'input',
                name: 'licenseYear',
                message: 'What year is your license?',
                when: function (data) {
                    return data.licenseBoolean;
                },
            },
            { //If license BOOLEAN enter FULL NAME
                type: 'input',
                name: 'fullName',
                message: 'Please enter your full name.  (ie. John A. Smith)',
                when: function (data) {
                    return data.licenseBoolean;
                },
            },
            { // IF License BOOLEAN
                type: 'rawlist',
                name: 'license',
                message: 'Which licence would you like to add',
                choices: ['MIT License', 'GNU General Public License v3.0', "other"],
                when: function (data) {
                    return data.licenseBoolean;
                },
            },

        ]);
        const licenseData = chooseLicense(data);

        const readme = generateMarkdown(data, licenseData);

        fs.writeFileSync('README.md', readme);

        console.group('Successfully created readme.md');

    } catch (err) {
        console.log(err);
    }
};

init();