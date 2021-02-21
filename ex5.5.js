function initials(str) {
    
    return str.toUpperCase().split(" ").map((n)=>n[0]).join(".");
}
console.log(initials("Sam Hariis"));
