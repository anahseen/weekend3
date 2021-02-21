let isIsogram = (str) => str.toLowerCase().split("").every((c, i) => str.indexOf(c) == i);

console.log(isIsogram("Gg"));