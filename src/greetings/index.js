module.exports.greeting = (name) => {

    if (typeof name == 'string') {
            if (name === name.toUpperCase()) {
                    return 'HELLO ' + name + '!';
            } else {
                    return 'Hello ' + name + '!';
            }
    } else {
            return 'Hello Stranger!';                
    }
};
