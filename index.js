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
    }

    const size = () => {
        let count = 0;
        for (const key in list) {
            console.log(key);
            if (list[key] = "nextNode") {
                count++;
            }
        }
        return count;
    }

    const head = () => {

    }

    // Use same loop from append to go until last node and return
    const tail = () => {
        let currentNode = list;
        while (currentNode.nextNode != null) {
            currentNode = currentNode.nextNode;
        }

        return currentNode;
    }

    const contains = (value) => {
        // Use same format from append to iterate over objects
        // Check currentNode for null instead of nextNode to not skip over last object
        let currentNode = list;
        while (currentNode != null) {

            if (currentNode.value == value) {
                return true;
            }
            currentNode = currentNode.nextNode;
        }

        return false;

    }

    return { list, append, prepend, tail, size, contains }
}

// Factory function for a node that returns a value and nextNode which are null by default
function Node(value = null, nextNode = null) {
    return { value, nextNode }
}

let list1 = LinkedList();
list1.append('Something');
list1.prepend('New head');
list1.append('Something else');
console.log(list1);
console.log(list1.tail());
console.log(list1.contains('Something else'));

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

