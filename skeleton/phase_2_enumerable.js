Array.prototype.myEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};  

const callback = function(ele) {
  return ele;
};  


// console.log([0,2,4].myEach(callback));

Array.prototype.myMap = function(callback) { 
    let newArr = []; 
    let pusher = function(ele) {
 
        newArr.push(callback(ele));
    };
    this.myEach(pusher); 
    return newArr; 
};

const mapCall = function(ele) {
  debugger 
  return (ele * 3); 
};

// console.log([0,2,4].myMap(mapCall));


Array.prototype.myReduce = function(callback,  initial_value ) {
  let acc;
   let reducer = function(ele) {
     acc += callback(ele);
   };
  if (initial_value) {
    acc = initial_value;
    this.myEach(reducer);
  } else {
    acc = this[0];
     this.slice(1).myEach(reducer);
  }
 
 
  return acc;
};

const injector = function(ele) {
  return (ele * 2)
}

// console.log([1, 2, 4].myReduce(injector));