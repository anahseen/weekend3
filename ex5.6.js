function maskify(num) {

    return num.replace(/.(?=.{4})/g, "#");

}

console.log(maskify("23456789098765"));