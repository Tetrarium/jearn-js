class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(data) {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
    } else {
      const current = this.head;
  
      while(current.next) {
        current = current.next;
      }
  
      current.next = node;
    }

    return node;
  }

  printData() {
    let current = this.head;

    while(current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const list = new LinkedList();
console.log(list);

console.log(list.append(1));
console.log(list);

list.append(2);

list.printData();
