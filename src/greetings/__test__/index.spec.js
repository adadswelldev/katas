const greeting = require('../index').greeting;

describe('Greetings', () => {
    test('Simple Greeting', () => {
        expect(greeting('Bob')).toBe('Hello Bob!');
    });
});