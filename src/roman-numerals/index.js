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
       
        if (num >=10) {
                numeral = numeralMap[10];
                num -= 10;
        } else if (num >= 5) {
                numeral = numeralMap[5];
                num -= 5;
        }

        /*if (numeralMap.hasOwnProperty(num)) {
                return `${numeral}${numeralMap[num]}`;
        }

        if (numeralMap.hasOwnProperty(num + 1)) {
                return `${numeral}I${numeralMap[num + 1]}`;
        }*/

        if (num > 3) {
                return `${numeral}${this.romanNumerals(num)}`;
        }
       
        for (let i = 0; i < num; i++) {
                numeral += numeralMap[1];
        }
        return numeral;
}
