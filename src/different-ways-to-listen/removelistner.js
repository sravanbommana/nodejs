const EventEmitter = require('node:events');
class MultiApproachToAddListner extends EventEmitter{
  constructor() {
    super();
  }
}

const multiApproachToAddListner = new MultiApproachToAddListner();

const dataListner = (user) => {
  console.log("listening with first listener", user);
}

const dataListner1 = (user) => {
  console.log("listening with second listener", user);
}

multiApproachToAddListner.addListener("way", dataListner);

multiApproachToAddListner.on("way1", dataListner1);

setInterval(() => {
  multiApproachToAddListner.emit("way1", "test1");
  multiApproachToAddListner.emit("way", "test2");
}, 1000);

setInterval(() => {
 // multiApproachToAddListner.removeListener("way1", dataListner1);
  // This will remove all listners on way1
  multiApproachToAddListner.removeAllListeners("way");

}, 2000);



