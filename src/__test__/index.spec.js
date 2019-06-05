const romanNumerals = require('../index').romanNumerals;

describe('Roman Numerals', () => {
   
    test('testing 1 to I', () => {
        expect(romanNumerals(1)).toBe('I');
    });
   
    test('testing 2 to II', () => {
        expect(romanNumerals(2)).toBe('II');
    });
   
    test('testing 3 to III', () => {
        expect(romanNumerals(3)).toBe('III');
    });

    test('testing 4 to IV', () => {
        expect(romanNumerals(4)).toBe('IV');
    });

    test('testing 5 to V', () => {
        expect(romanNumerals(5)).toBe('V');
    });

    test('testing 6 to VI', () => {
        expect(romanNumerals(6)).toBe('VI');
    });
});

