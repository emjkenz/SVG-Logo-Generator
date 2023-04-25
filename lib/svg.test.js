const { Triangle, Square, Circle } = require('./shapes.js')
const { Text } = require('./text.js');
const { SVG } = require('./svg.js');

describe('Triangle Logo ABC', () => {
    describe('render', () => {
        it('should return triangle SVG logo with the text "abc"', () => {
            const triangle = new Triangle();
            triangle.setColor('blue');
            const text = new Text('abc', 'red');
            const svg = new SVG(text, triangle);
            expect(svg.render()).toBe('<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150,50 100,150 200,150" fill="blue"/><text x="150" y="100" font-size="48" text-anchor="middle" dy=".3em" fill="red">abc</text></svg>');
        });
    });
});

describe('Square Logo ABC', () => {
    describe('render', () => {
        it('should return square SVG logo with the text "DEF"', () => {
            const square = new Square();
            square.setColor('green');
            const text = new Text('DEF', '#fff');
            const svg = new SVG(text, square);
            expect(svg.render()).toBe('<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="100" y="50" width="100" height="100" fill="green"/><text x="150" y="100" font-size="48" text-anchor="middle" dy=".3em" fill="#fff">DEF</text></svg>');
        });
    });
});

describe('Circle Logo ABC', () => {
    describe('render', () => {
        it('should return circle SVG logo with the text "GhI"', () => {
            const circle = new Circle();
            circle.setColor('#1f09e2');
            const text = new Text('GhI', '#00ead3');
            const svg = new SVG(text, circle);
            expect(svg.render()).toBe('<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="50" fill="#1f09e2"/><text x="150" y="100" font-size="48" text-anchor="middle" dy=".3em" fill="#00ead3">GhI</text></svg>');
        });
    });
});
