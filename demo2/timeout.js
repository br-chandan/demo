console.log('Start Countdown');

setTimeout(() => {
  console.log('3');
}, 0);

setTimeout(() => {
  console.log('2');
}, 1000);

setTimeout(() => {
  console.log('1');
}, 2000);

setTimeout(() => {
  console.log('Another message at 1000ms');
}, 1000);

setTimeout(() => {
  console.log('Go!');
}, 3000);

console.log('Countdown timers set');
