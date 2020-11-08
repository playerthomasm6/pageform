const fs = require('fs'); // Grabs FILE SYSTEM
const inquirer = require('inquirer'); // Grabs INQUIRER

const generateReadme = () => { // FUNCTION Generates Readme Text

}

const init = async () => {

    try {
        const answers = await inquirer.prompt([
            {
            type: 'first',
            name: 'second',
            message: 'third',
            },

        ]);

        const readme = generateReadme(answers);

        fs.writeFileSync ('readme.md', readme);

        console.group('Successfully created readme.md');

    } catch (err) {
        console.log(err);
    }
};

init();