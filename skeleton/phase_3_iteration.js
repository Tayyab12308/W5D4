Array.prototype.bubbleSort = function() {
  let sorted = false
  while (!sorted) {
  sorted = true;
    for (let i = 0; i < this.length; i++) {
      if (this[i] > this[i + 1]) {
        let switched = this[i + 1];
        this[i + 1] = this[i];
        this[i] = switched;
        sorted = false;
      }
    }
  }
  return this
}

`console.log([2, 4, 3, 1].bubbleSort());


