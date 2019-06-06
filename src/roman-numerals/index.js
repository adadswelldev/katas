module.exports.romanNumerals = (num) => {
        
        let numeral = '';
       
        if (num == 4) {
                return 'IV';
        } else if (num >= 5) {
                numeral = 'V';
                num -= 5;
        }
       
        for (let i = 0; i < num; i++) {
                numeral += 'I';
        }
        return numeral;
}
