const limits = {
}

const MAX_REQUEST = 10
const MAX_TIME = 5

const rateLimits = id => {
    let result = true;
    if (!limits[id]) {
        const timestamp = new Date().getTime();
        const obj = {
            timestamp,
            remaining: MAX_REQUEST
        }
        limits[id] = obj
        console.log('no id')
    } else if ((new Date().getTime() - limits[id].timestamp) / 1000 >= MAX_TIME) {
        const timestamp = new Date().getTime();   
        const obj = {
            timestamp,
            remaining: MAX_REQUEST
        }
        limits[id] = obj
        console.log('reset')

        result = true;
    } else if (limits[id].remaining == 0) {
        console.log('passed the time')
        result = false;
    } else {
        console.log('ok')
        console.log(limits[id].remaining);

        limits[id].remaining -= 1;
    }
    return result;
}
console.log(rateLimits(1))
console.log(rateLimits(1))
console.log(rateLimits(1))
console.log(rateLimits(1))
console.log(rateLimits(1))
console.log(rateLimits(1))
console.log(rateLimits(1))
console.log(rateLimits(1))
console.log(rateLimits(1))
console.log(rateLimits(1))
console.log(rateLimits(1))
console.log(rateLimits(1))
console.log(rateLimits(1))
console.log(rateLimits(1))
console.log(rateLimits(1))
console.log(rateLimits(1))
console.log(rateLimits(1))
console.log(rateLimits(1))
console.log(rateLimits(1))
console.log(rateLimits(1))
console.log(rateLimits(1))
console.log(rateLimits(1))
console.log(rateLimits(1))
console.log(rateLimits(1))


function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }

wait(5000);

console.log(rateLimits(1))
