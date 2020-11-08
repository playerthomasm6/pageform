const fs = require('fs'); // Grabs FILE SYSTEM
const inquirer = require('inquirer'); // Grabs INQUIRER
const generateMarkdown = require('./generateMarkdown.js');

const init = async () => {

    try {
        const answers = await inquirer.prompt([
            {
            type: 'first',
            name: 'second',
            message: 'third',
            },

        ]);

        const readme = generateMarkdown(answers);

        fs.writeFileSync ('readme.md', readme);

        console.group('Successfully created readme.md');

    } catch (err) {
        console.log(err);
    }
};

init();