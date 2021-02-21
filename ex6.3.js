let sortAlphabets = function (s1, s2) {
    let sum = (s1 + s2)
        return sum
            .split('')
            .filter(function (item, pos, self) {
                return self.indexOf(item) == pos;
            })
            .sort().join('');
    
};

console.log(sortAlphabets("srdtcfyvgbh", "okpohutc"));

