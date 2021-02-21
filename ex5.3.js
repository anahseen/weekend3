function toCamelCase(s) {

    return s.replace(/([-_][a-z])/ig, (str) => {
        return str.toUpperCase()
            .replace('-', ' ')
            .replace('_', ' ');
    });
};
console.log(toCamelCase("Hfggff-hhff-hjh_hhhh"));