let isSquare = (n) => {
    return n > 0 && Math.sqrt(n) % 1 === 0 ? 
    Math.pow(Math.sqrt(n)+1,2): -1 + ` since ${n} is not perfect`;
};
