const inquirer = require('inquirer');

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

promptUser();