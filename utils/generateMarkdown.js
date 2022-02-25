function generateReadMe(data) {
    return `
# ${data.title}

## Table of contents

- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Credits](#Credits)
- [Test](#Test)
- [Github](#Github)
- [Email](#Email)

## Description

${data.description}

## Installation

${data.installation}

## Usage

${data.usage}

## Credits

${data.credit}

## Test

${data.test}

## Github

Github Profile: https://github.com/${data.username}

## Email
Email me: ${data.email}

## License

![badge](https://img.shields.io/badge/license-${data.license}-green)


This app is under the ${data.license} license


    `;
}

module.exports = generateReadMe;