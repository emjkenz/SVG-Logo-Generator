// Import Filesystem and Inquirer packages
const inquirer = require('inquirer');
const fs = require('fs');
const {Triangle, Circle, Square} = require('./lib/shapes.js');
const { Text } = require('./lib/text.js');
const { SVG } = require('./lib/svg.js');

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
    let shapeSVG = null;

    // Create the shape SVG based on the shape type
    switch (shape) {
    case 'circle':
        shapeSVG = new Circle();
        break;
    case 'triangle':
        shapeSVG = new Triangle();
        break;
    case 'square':
        shapeSVG = new Square();
        break;
    }

    // Set the shape color
    shapeSVG.setColor(shapeColor);

    // Create the text part of the SVG
    const textSVG = new Text(text, textColor);

    // Create the full SVG
    const svg = new SVG(textSVG, shapeSVG);

    // Return the full SVG
    return svg.render();
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