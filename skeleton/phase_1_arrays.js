Array.prototype.unique = function() {
  let new_arr = [];
  for (let i = 0; i < this.length; i++) {
    if (!new_arr.includes(this[i])) {
      new_arr.push(this[i]);
    }
  }
  return new_arr;
};
// console.log([1, 1, 3, 4, 5, 2, 3, 4, 4].unique());


Array.prototype.twoSum = function() {
  let pairs = [];
  for (let i = 0; i < this.length; i++) {
    for (let j = 1; j < this.length; j++) { 
      if (i < j && this[i] + this[j] === 0) {
        pairs.push([i, j]);
      }
    }
  }
  return pairs;
};

// console.log([-1, 1, 2, -2, 8, 6, -8].twoSum());


Array.prototype.transpose = function() {
  let transposed = [];
  for (let i = 0; i < this[0].length; i++) {
      const arr = []; 
    for (let j = 0; j < this.length; j++) {
      arr.push(this[j][i]);

    }
    // debugger 
    transposed.push(arr);
  }
  return transposed; 
};

// console.log([[0,1],[3,5],[4,2]].transpose()); 

// console.log([[0,1,6,5],[3,5,7,1],[4,2,8,9]].transpose()); 
