function generateReadMe(data) {
    return `
# ${data.title}

## Description

${data.description}

## Table of contents

- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Credits](#Credits)
- [Test](#Test)
- [Github](#Github)
- [Email](#Email)

## Installation

${data.installation}

## Usage

${data.usage}

## Credits

${data.credits}

## Test

${data.test}

## Github

${data.github}

## Email

${data.email}

## License

![badge](https://img.shields.io/badge/license-${data.license}-green)
<br>
This app is under the ${data.license} license
<br>
Github Profile: ${data.username}
<br>
Email me: ${data.email}
<br>
    `;
}

module.exports = generateReadMe;