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


// Factory function for a list

function LinkedList() {
    let list = Node("head");

    const append = (value) => {
        // Set the head of node to a new variable
        // Set current node to the next node if it is not null
        // If it is, set that node to the new value
        let currentNode = list;
        while (currentNode.nextNode != null) {
            currentNode = currentNode.nextNode;
        }
        currentNode.nextNode = Node(value);

    }

    // Set the head to the new value and next node to the head
    const prepend = (value) => {
        list = Node(value, nextNode = list);
        return list;
    }

    return { list, append, prepend }
}

// Factory function for a node that returns a value and nextNode which are null by default
function Node(value = null, nextNode = null) {
    return { value, nextNode }
}

let list1 = LinkedList();
console.log(list1.append('Something'));
// console.log(list1.prepend('yag'));
console.log(list1.append('Something else'));

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

// console.log(findValue2(sampleList, null))


