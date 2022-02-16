const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateReadMe = require("./utils/generateMarkdown");
const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
            validate: (value) => {
                if (value) {
                    return true;
                }
                else {
                    return "Please provide a title!"
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Give a description of your project',
            validate: (value) => {
                if (value) {
                    return true
                }
                else {
                    return "Please provide a description for your project!"
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Give your installation instructions',
            validate: (value) => {
                if (value) {
                    return true
                }
                else {
                    return "please provide the steps needed to install your project!"
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'explain how to use your project',
            validate: (value) => {
                if (value) {
                    return true
                }
                else {
                    return "Please give a few words about how to use your project"
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'Provide the license for your project',
            choices: [
                "MIT",
                "Apache",
                "Mozilla",
                "Other",
                "N/A"
            ],
            validate: (value) => {
                if (value) {
                    return true
                }
                else {
                    return "Select a license, If you do not have one or you are unsure please select N/A"
                }
            }
        },
        {
            type: 'input',
            name: 'credit',
            message: 'Who will get credit for this project',
            validate: (value) => {
                if (value) {
                    return true
                }
                else {
                    return "Please provide credit where it is due"
                }
            }
        },
        {
            type: 'input',
            name: 'test',
            message: 'How did you test this project?',
            validate: (value) => {
                if (value) {
                    return true
                }
                else {
                    return "Please tell us how to test your project"
                }
            }
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is your Github username?',
            validate: (value) => {
                if (value) {
                    return true
                }
                else {
                    return "Give your Github username for clout!"
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
            validate: (value) => {
                if (value) {
                    return true
                }
                else {
                    return "Please provide your email"
                }
            }
        }
    ]);
};

async function init() {
    try {
        const data = await promptUser();
        const generateData = generateReadMe(data);

        await writeFileAsync("./dist/README.md", generateData);
        console.log("README.md was created successfully");
    }
    catch(error) {
        console.log(error);
    }
}

init();