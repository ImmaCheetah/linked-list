class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

class LinkedList {
    // Check if head is defined and if its not set it to null so it doesn't have a value of null
    constructor(head) {
        this.head = head!==undefined ? new Node(head) : null;
    }

    append(value) {
        // console.log(current.nextNode);
        if (this.head == null) {
            this.head = new Node (value);
            return this;
        }
        let current = this.head;
        while (current.nextNode != null) {
            current = current.nextNode;
        }
        current.nextNode = new Node(value);
        // Returns a LINKEDLIST instance that can be used to chain methods
        return this;
    }

    prepend(value) {
        this.head = new Node(value, this.head)
    }

    size() {
        let count = 0;
        let current = this.head;
        while (current != null) {
            count++
            current = current.nextNode;
        }
        return count;
    }

    getHead() {
        return this.head;
    }

    tail() {
        let current = this.head;
        while (current.nextNode != null) {
            current = current.nextNode;
        }
        return current;
    }
    
    at(index) {
        let i = 0;
        let current = this.head;
        while (i < index) {
            if (current == null) return null;
            current = current.nextNode;
            i++;
        }

        return current;
    }

    pop() {
        let current = this.head;
        if (current.nextNode == null) {
            this.head = null;
            return;
        } 
        while (current.nextNode.nextNode != null) {
            current = current.nextNode;
        }
        current.nextNode = null;
    }

    contains(value) {
        let current = this.head;
        while (current != null) {
            if (current.value === value) {
                return true
            }
            current = current.nextNode;
        }
        return false;
    }

    find(value) {
        let current = this.head;
        let index = 0;
        let listSize = this.size()

        if (listSize === 0) {
            return null;
        }

        while (current != null) {
            index++;
            if (current.value === value) {
                return index;
            }
            current = current.nextNode;
        }

        return null; 
    }

    toString() {
        let current = this.head;
        let listString = '';
        let tailNode = this.tail();
        while (current != null) {
            listString += `(${current.value}) -> `;
            current = current.nextNode;
        }
        return listString + tailNode.nextNode;
    }

    // head = new Node(this.head);
}

let myList = new LinkedList('something');
// myList.prepend('something else');
// myList.append('foo')
//       .append('something 2')
//       .append('yoyo');
// myList.append('something else');
console.log(myList.find());