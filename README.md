# SVG Logo Generator
Create simple SVG logos with Node.js

## User Story
```
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
```

## Acceptance Criteria
```
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```
## Examples

Example 1
![example 1](./examples/example1.svg)

Example 2
![example 2](./examples/example2.svg)

Example 3
![example 3](./examples/example3.svg)

## Installation

1) Clone the github repository
2) Use `npm i` to install the packages required

## Usage

To use the SVG generator run `node index.js` to run the program

See example video on how to use it: [Video](https://drive.google.com/file/d/15gTB-PEhGN6__EgMr-FCuDcpLNg567BX/view)

## Test

To run a test on the program use `npm test`

## Licence

This is licened under the MIT licence