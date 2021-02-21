let shortWord = (sentence) => {
    if (sentence.length > 0) {
        
    
    let str = sentence.split(' ');
    return (
        str.reduce(function (a, b) {
            return a.length > b.length ? a : a.length == b.length ? a +','+ b : b;
        })
    )
}
}

console.log(shortWord('Type anyrr sentence hdere'));