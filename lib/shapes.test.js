const {Triangle, Square, Circle} = require('./shapes.js')

describe('Triangle', () => {
    describe('render', () => {
        it('should return an SVG triangle', () => {
            const triangle = new Triangle();
            triangle.setColor('blue');
            expect(triangle.render()).toBe('<polygon points="150,50 100,150 200,150" fill="blue"/>');
        });
    });
});

describe('Square', () => {
    describe('render', () => {
        it('should return an SVG circle', () => {
            const square = new Square();
            square.setColor('blue');
            expect(square.render()).toBe('<rect x="100" y="50" width="100" height="100" fill="blue"/>');
        });
    });
});

describe('Circle', () => {
    describe('render', () => {
        it('should return an SVG circle', () => {
            const circle = new Circle();
            circle.setColor('blue');
            expect(circle.render()).toBe('<circle cx="150" cy="100" r="50" fill="blue"/>');
        });
    });
});