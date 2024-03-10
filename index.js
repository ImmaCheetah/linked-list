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

    let node = Node();

    const append = (value) => {
        let node = Node
        node.nextNode = node;

        return node;
    }

    return {head, node, append}
}

function Node(value = null, nextNode = null) {
 
    return { value, nextNode }
}

let node1 = Node("wow");
console.log(node1);

let list1 = LinkedList();
console.log(list1.append('bam'));

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



