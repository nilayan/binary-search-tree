class BST {
  constructor(value) {
    const label = 'Constructor';
    this.value = value;
    this.left = null;
    this.right = null;
    logFn(label, 'value is ' + value);
  }

  insert(value) {
    const label = 'Insert';
    logFn(label, 'value is ' + value);

    if (value <= this.value) {
      logFn(label, 'value(' + value + ') LT or EQ ' + this.value);
      if (!this.left) {
        logFn(label, 'node.LEFT is empty');
        logFn(label, 'node.LEFT new sub-tree value('+value+')');
        this.left = new BST(value);
      } else {
        logFn(label, 'descend node.LEFT');
        this.left.insert(value);
      }
    } else if (value > this.value) {
      logFn(label, 'value(' + value + ') GT ' + this.value);
      if (!this.right) {
        logFn(label, 'node.RIGHT is empty');
        logFn(label, 'node.RIGHT new sub-tree value('+value+')');
        this.right = new BST(value);
      } else {
        logFn(label, 'descend node.RIGHT');
        this.right.insert(value);
      }
    }
  }

  find(value) {
    const label = 'Find';
    logFn(label, 'value is ' + value);

    if (this.value === value) { // FOUND VALUE
      logFn(label, 'value('+value+') EQ ' + this.value);
      return true;
    }

    if (value <= this.value) { // GO LEFT
      logFn(label, 'value('+value+') LT or EQ ' + this.value);
      if (!this.left) {
        logFn(label, 'node.LEFT is empty');
        return false;
      } else {
        logFn(label, 'descend node.LEFT');
        return this.left.find(value);
      }
    } else if (value > this.value) { // GO RIGHT
      logFn(label, 'value('+value+') GT node.value('+this.value+')');
      if (!this.right) {
        logFn(label, 'node.RIGHT is empty');
        return false;
      } else {
        logFn(label, 'descend node.RIGHT');
        return this.right.find(value);
      }
    }
  }
};

const logFn = (label, text) => {
  if (domElement) {
    domElement.innerHTML += '<span class="label">'+label+'</span> ' + text + '<br/>';
  }
}

// start here
const domElement = document.getElementById('app');

let myBST = new BST(4);
myBST.insert(3);
myBST.insert(8);
myBST.insert(2);
myBST.insert(9);

myBST.find(8);