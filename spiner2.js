const spinerCycle = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ','\r|   ']
let time = 100;
for (let i = 1; i <= 2; i++){
  for (let i = 0; i < spinerCycle.length; i++){
    setTimeout(() => { process.stdout.write(spinerCycle[i]); }, time);
    time += 300;
  }
}
setTimeout(() => { process.stdout.write('\n'); }, time);