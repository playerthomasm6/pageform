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
                default: false
            },
            { // IF IMAGE, ALT TAG FOR IMAGE
                type: 'input',
                name: 'imageAltTag',
                message: 'Please enter an Alt Tag for your image.',
                when: function (data) {
                    return data.imageBoolean = true;
                },
            },
            { // IF IMAGE, FILE LOCATION FOR IMAGE
                type: 'input',
                name: 'imageURL',
                message: 'Please enter your image file location or URL.',
                when: function (data) {
                    return data.imageBoolean = true;
                },
            },
            {
                type: 'input',
                name: 'briefDescription',
                message: 'Please briefly describe your project',
            },
            { //Is this information correct?
                type: 'input',
                name: 'alsoThis',
                message: 'Write some Shit down yo.',
            },


            { //ADD a license BOOLEAN
                type: 'confirm',
                name: 'licenceBoolean',
                message: 'Would you like to add a licence',
            },
            { //If license BOOLEAN select YEAR
                type: 'input',
                name: 'licenseYear',
                message: 'What year is your license?',
            },
            { //If license BOOLEAN enter FULL NAME
                type: 'input',
                name: 'fullName',
                message: 'Please enter your full name.  (ie. John A. Smith)',
            },
            { // IF License BOOLEAN
                type: 'rawlist',
                name: 'license',
                message: 'Which licence would you like to add',
                choices: ['MIT License', 'GNU General Public License v3.0', "other"]
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