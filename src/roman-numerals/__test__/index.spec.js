const romanNumerals = require('../index').romanNumerals;

describe('Roman Numerals', () => {
    test('testing 0 throws error', () => {
        expect(() => {
            romanNumerals(0);
        }).toThrowError('Number cannot be 0.');
    });

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
    
    test('testing 9 to IX', () => {
        expect(romanNumerals(9)).toBe('IX');
    });
    test('testing 10 to X', () => {
        expect(romanNumerals(10)).toBe('X');
    });
    test('testing 11 to XI', () => {
        expect(romanNumerals(11)).toBe('XI');
    });

    test('testing 13 to XIII', () => {
        expect(romanNumerals(13)).toBe('XIII');
    });

    test('testing 14 to XIV', () => {
        expect(romanNumerals(14)).toBe('XIV');
    });

    test('testing 15 to XV', () => {
        expect(romanNumerals(15)).toBe('XV');
    });

    test('testing 16 to XVI', () => {
        expect(romanNumerals(16)).toBe('XVI');
    });
    test('testing 20 to XX', () => {
        expect(romanNumerals(20)).toBe('XX');
    });
    test('testing 23 to XXIII', () => {
        expect(romanNumerals(23)).toBe('XXIII');
    });
    test('testing 24 to XXIV', () => {
        expect(romanNumerals(24)).toBe('XXIV');
    });
    test('testing 37 to XXXVII', () => {
        expect(romanNumerals(37)).toBe('XXXVII');
    });
});
