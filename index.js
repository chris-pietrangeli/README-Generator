const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require("./utils/generateMarkdown");
const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Give a description of your project'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Give your installation instructions'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'explain how to use your project'
        },
        {
            type: 'list',
            name: 'license',
            message: 'Provide the license for your project',
            choices: [
                "MIT",
                "Apache",
                "Mozilla"
            ]
        },
        {
            type: 'input',
            name: 'credit',
            message: 'Who will get credit for this project'
        },
        {
            type: 'input',
            name: 'test',
            message: 'How did you test this project?'
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is your Github username?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        }
    ]);
};

async function promisify() {
    try {
        const data = await promptUser();
        const generateData = generateMarkdown(data);

        await writeFileAsync("./dist/README.md", generateData);
        console.log("README.md was created successfully");
    }
    catch(error) {
        console.log(error);
    }
}

promisify();