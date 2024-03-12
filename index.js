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

    const size = () => {
        let count = 0;
        let currentNode = list;
        while (currentNode.nextNode != null) {
            count++;
            currentNode = currentNode.nextNode;
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

    const at = (index) => {
        let currentNode = list;
        // Loop through index amount of times and go to next node until it reaches the index
        for (let i = 0; i < index; i++) {
            if (currentNode == null) return null;
            currentNode = currentNode.nextNode;
        }

        return currentNode;
    }

    const pop = () => {
        let currentNode = list;
        while (currentNode.nextNode != null) {

            currentNode = currentNode.nextNode;
        }

        currentNode.nextNode = null;
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

    const find = (value) => {
        let index = 0;
        let currentNode = list;
        while (currentNode != null) {
            if (currentNode.value == value) {
                return index;
            }
            index++;
            currentNode = currentNode.nextNode;
        }

        return null;
    }

    const toString = () => {
        let currentNode = list;
        let listString = '';
        while (currentNode != null) {
            listString += `(${currentNode.value}) -> `
            currentNode = currentNode.nextNode;
        }

        return listString + null;
    }

    return { list, append, prepend, tail, size, contains, at, pop, find, toString }
}

// Factory function for a node that returns a value and nextNode which are null by default
function Node(value = null, nextNode = null) {
    return { value, nextNode }
}

let list1 = LinkedList();
list1.append('Something');
console.log(list1.prepend('New head'));
console.log(list1.find("Something"));
console.log(list1.toString());



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

