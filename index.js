// Import Filesystem and Inquirer packages
const inquirer = require('inquirer');
const fs = require('fs');

// Questions for Inquirer
const questions = [
{
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters for the logo text:',
    validate: input => input.length <= 3 ? true : 'Text must be three characters or less.',
},
{
    type: 'input',
    name: 'textColor',
    message: 'Enter the text color (color keyword or hexadecimal number):',
},
{
    type: 'list',
    name: 'shape',
    message: 'Choose a shape for the logo:',
    choices: ['circle', 'triangle', 'square'],
},
{
    type: 'input',
    name: 'shapeColor',
    message: 'Enter the shape color (color keyword or hexadecimal number):',
},
];

const createShape = (shape, shapeColor, text, textColor) => {
    // Create the SVG variable
    let shapeSVG = '';

    // Create the shape SVG based on the shape type
    switch (shape) {
    case 'circle':
        shapeSVG = `<circle cx="150" cy="100" r="50" fill="${shapeColor}"/>`;
        break;
    case 'triangle':
        shapeSVG = `<polygon points="150,50 100,150 200,150" fill="${shapeColor}"/>`;
        break;
    case 'square':
        shapeSVG = `<rect x="100" y="50" width="100" height="100" fill="${shapeColor}"/>`;
        break;
    }

    // Create the text part of the SVG
    const textSVG = `<text x="150" y="100" font-size="48" text-anchor="middle" dy=".3em" fill="${textColor}">${text}</text>`;

    // Return the full SVG
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">${shapeSVG}${textSVG}</svg>`;
}

inquirer.prompt(questions).then((answers) => {
    // Deconstruct the answers object
    const {shape, shapeColor, text, textColor} = answers;

    // Create the SVG
    const svg = createShape(shape, shapeColor, text, textColor);
    
    // Write the SVG to a file
    fs.writeFileSync('logo.svg', svg);

    // Log a success message
    console.log('Generated logo.svg');
});