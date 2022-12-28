// A memoize decorator function 
// that is capable of handling multiple parameters 
export const memoize = (fn) => {
    const cache = {};

    return (...args) => {
        if (args.toString() in cache) {
            // if you want to verify result comes from cache
            console.log(cache);
            return cache[args.toString()];
        }
        const result = fn(...args);
        cache[args.toString()] = result;
        return result;
    }
}

const add3 = (num1, num2, num3) => {
    return num1 + num2 + num3;
}

const memoizeAdd3 = memoize(add3)
console.log(memoizeAdd3(10,20,30))
console.log(memoizeAdd3(10,20,30))
console.log(memoizeAdd3(10,200,30))
console.log(memoizeAdd3(10,20,30))

