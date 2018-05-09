new Promise((resolve, reject) => {
    resolve();
}).then((soem) => {
    console.log("One")
    throw Error("Re")
}).catch((some) => {
    console.log("Cached");
}).then((two) => {
    console.log("Two")
})