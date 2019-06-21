module.exports.romanNumerals = (num) => {

        if (num === 0) {
                throw 'Number cannot be 0.';
        }

        const numeralMap = {
                10: "X",
                5: "V",
                1: "I"
        };

        if (numeralMap.hasOwnProperty(num)) return numeralMap[num];

        if (numeralMap.hasOwnProperty(num + 1)) {
                return `I${numeralMap[num + 1]}`;
        }

        let numeral = '';
       
        if (num >= 5) {
                numeral = 'V';
                num -= 5;
        }
       
        for (let i = 0; i < num; i++) {
                numeral += 'I';
        }
        return numeral;
}
