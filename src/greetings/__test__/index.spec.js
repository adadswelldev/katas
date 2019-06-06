const greeting = require('../index').greeting;

describe('Greetings', () => {
    test('Simple Greeting', () => {
        expect(greeting('Bob')).toBe('Hello Bob!');
    });

    test('General Greeting', () => {
        expect(greeting()).toBe('Hello Stranger!');
    });

    test('Greeting None String', () => {
        expect(greeting(23)).toBe('Hello Stranger!');
    });
    
    test('Shouting Greeting', () => {
        expect(greeting('BOB')).toBe('HELLO BOB!');
    });
});