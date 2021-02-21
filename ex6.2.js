function dupli(string) {
    let check = {};
    for (let i = 0; i < string.length; i++) {
        let character = string.charAt(i);
        if (check[character]) {
            check[character]++;
        } else {
            check[character] = 1;
        }
    }

    let arr = Object.values(check);
    let max = Math.max(...arr);

    

    return ` ${max}`;
};

console.log(dupli('Iestrr'));