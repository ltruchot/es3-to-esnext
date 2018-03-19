
// OBJECT PARTICULARITY & METHODS
// GET, PUT (+ SET)
// defineProperty, seal, freeze

// COPY AN OBJECT
// cyclic reference ???
// iterate
// JSON.stringify to JSON.parse
// Object.assign

// PURE FUNCTION

// CLOSURE
for (var timer = 1; timer <= 5; timer++) {
  setTimeout(function() {
    // console.log('Elapsed second: ' + timer);
  }, 1000 * timer);
}

var wait = 3;
setTimeout(function() {
  console.log('Elapsed second: ' + wait);
}, 1000 * wait);
wait = 5;

// CURRYING

// CHAINING

// THIS & BINDING

// NEW
// create a new object
// bind this
// bind prototype
// return object

// CALL && APPLY


