/** Class representing a binary search tree (BST) */
class BST {
  /**
   * Create a binary search tree.
   * @constructor
   * @param {number} value
   */
  constructor(value) {
    const label = 'New BST';
    this.value = value;
    this.left = null;
    this.right = null;
    logFn(label, '<b>'+value+'</b>');
  }

  /**
   * Insert a number in the BST with recursion.
   * @param {number} value - The number to insert.
   */
  insert(value) {
    const label = 'Insert';

    if (value <= this.value) {
      logFn(label, '<b>' + value + '</b> <= ' + this.value + ' Go LEFT');
      if (!this.left) {
        logFn(label, this.value + '.left is ' + value);
        this.left = new BST(value);
      } else {
        logFn(label, this.value + '.left subtree');
        this.left.insert(value);
      }
    } else if (value > this.value) {
      logFn(label, '<b>' + value + '</b> > ' + this.value + ' Go RIGHT');
      if (!this.right) {
        logFn(label, this.value + '.right is ' + value);
        this.right = new BST(value);
      } else {
        logFn(label, this.value + '.right subtree');
        this.right.insert(value);
      }
    }
  }

  /**
   * Search for number in the BST with recursion.
   * @param {number} value - The number to search for.
   */
  search(value) {
    const label = 'Search';

    if (this.value === value) {
      logFn(label, 'Found value ' + this.value);
      return true;
    }

    if (value <= this.value) {
      logFn(label, '<b>' + value + '</b> <= ' + this.value + ' Go LEFT');
      if (!this.left) {
        logFn(label, this.value + '.left is empty');
        return false;
      } else {
        logFn(label, this.value + '.left subtree');
        return this.left.search(value);
      }
    } else if (value > this.value) {
      logFn(label, '<b>' + value + '</b> > ' + this.value + ' Go RIGHT');
      if (!this.right) {
        logFn(label, this.value + '.right is empty');
        return false;
      } else {
        logFn(label, this.value + '.right subtree');
        return this.right.search(value);
      }
    }
  }

  /**
   * Depth-first in-order traversal (left, root, right) with recursion.
   */
  inOrderTraversal() {
    const label = 'In-order traversal';

    if (!this.left && !this.right) {
      logFn(label, this.value + ' [leaf] ');
      return;
    }

    if (this.left) {
      this.left.inOrderTraversal();
    }

    logFn(label, this.value);

    if (this.right) {
      this.right.inOrderTraversal();
    }
  }

  /**
   * Depth-first pre-order traversal (root, left, right) with recursion.
   */
  preOrderTraversal() {
    const label = 'Pre-order traversal'

    if (!this.left && !this.right) {
      logFn(label, this.value + ' [leaf]');
      return;
    }

    logFn(label, this.value);

    if (this.left) {
      this.left.preOrderTraversal();
    }

    if (this.right) {
      this.right.preOrderTraversal();
    }
  }

  /**
   * Depth-first post-order traversal (left, right, root) with recursion.
   */
  postOrderTraversal() {
    const label = 'Post-order traversal'

    if (!this.left && !this.right) {
      logFn(label, this.value + ' [leaf]');
      return;
    }

    if (this.left) {
      this.left.postOrderTraversal();
    }

    if (this.right) {
      this.right.postOrderTraversal();
    }

    logFn(label, this.value);
  }
};

/**
 * Concatenates 'label' + 'text' to global variable 'result'.
 * @param {string} label
 * @param {string} text
 */
const logFn = (label, text) => {
  html += '<span class="label"> ' + label + '</span> ' + text + '<br/>';
}

// start here
let html = '';
const tree = new BST(4);

tree.insert(2);
tree.insert(1);
tree.insert(5);
tree.insert(3);

tree.search(5);

tree.inOrderTraversal();
tree.preOrderTraversal();
tree.postOrderTraversal();

document.getElementById('app').innerHTML = html;
