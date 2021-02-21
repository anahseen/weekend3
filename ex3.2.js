let numOfPpl = 0;
function pplOnTheBus(busStations) {
    for (let i = 0; i < busStations.length; i++) {
        if (numOfPpl >= 0) {
            let currentStop = busStations[i];
            numOfPpl += currentStop[0];
            numOfPpl -= currentStop[1];
        }else {
            return `negative num of people `;
        }
        
    }
    return numOfPpl;
}

console.log(pplOnTheBus([[4,1],[4,1],[5,9],[2,2]]));

