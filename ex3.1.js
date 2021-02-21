const numbers = [1000, 2, 50, 1200];

function nb_year(a, b, c, d) {
    for (let i = 0; a >= d; i++) {
        a + ((a * (b / 100)) + c);
    }
    return i + " years";
}
console.log(nb_year(1000, 2, 50, 1200));