const EventEmitter = require('node:events');
class MultiApproachToAddListner extends EventEmitter{
  constructor() {
    super();
  }
}

const multiApproachToAddListner = new MultiApproachToAddListner();

multiApproachToAddListner.addListener("way1", (user)=>{
  console.log("lsiting with way1", user)
});

multiApproachToAddListner.on("way", (user)=>{
  console.log("lsiting with way2", user)
});

multiApproachToAddListner.once("way", (user)=>{
  console.log("lsiting with way3", user)
});
multiApproachToAddListner.prependListener("way", (user) => {
  console.log("before ", user)

});

multiApproachToAddListner.emit("way", "pavan");
multiApproachToAddListner.emit("way1", "Kumar");

//we can set limit for listneres
multiApproachToAddListner.setMaxListeners(34);
console.log("Count::", multiApproachToAddListner.getMaxListeners());

//will give number of listners associated with event way
console.log(multiApproachToAddListner.listenerCount("way"));

// will give you lsit of event names associated with this emitter
console.log(multiApproachToAddListner.eventNames());
