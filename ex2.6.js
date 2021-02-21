function centuryFromYear(year) {
    let x = Math.ceil(year/100);
    return x; 
}
console.log(centuryFromYear(2000));