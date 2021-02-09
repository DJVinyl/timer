const args = process.argv;
let times = args.slice(2);
//const times = [10, 3,4,6];

times.sort((a, b) => {
  return a - b;
}); // ascending sort
console.log("Time (in seconds): ", times);
console.log("Beginning Timeout");
//setTimeout is a closure.... 'time' and is demonstrated really well here:
//https://stackoverflow.com/questions/21244805/javascript-settimeout-change-delay-in-function-call
let time = times[0];
let i = 0;
const doTimeout = () => {
  console.log("Delayed " + time + " seconds");
  i++;
  if (i === times.length) {
    return console.log("done");
  }
  time = times[i];
  setTimeout(() => {
    doTimeout();
  }, time * 1000);
};

setTimeout(() => {
  doTimeout();
}, time * 1000);
