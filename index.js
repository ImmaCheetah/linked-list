class LinkedListClass {
    constructor(list) {
        this._list = list;
    }
    get list() {
        return this._list;
    }
    set list(value) {
        this._list = value;
    }
}

class NodeMakerClass {
    constructor(node) {
        this.node = node
    }
}

function LinkedList() {

}

function Node(value = null, nextNode = null) {
 
    return { value, nextNode }
}

let node1 = Node("wow");
console.log(node1);

let sampleList = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };



