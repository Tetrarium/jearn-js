class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tall = null;
  }

  append(data) {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
    } 

    if (!this.tall) {
      this.tall = node;
    } else {
      this.tall.next = node;
      this.tall = node;
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

  search(query) {
    let current = this.head;

    while(current) {
      if (current.data === query) {
        return true;
      }

      current = current.next;
    }

    return false;
  }

  remove(target) {
    if (this.head.data === target) {
      this.head = this.head.next;
      return target;
    }

    let current = this.head;
    let previous = none;

    while (current) {
      if (current.data === target) {
        previous.next = current.next;
        return target;
      }

      previous = current;
      current = current.next;
    }

    return null;
  }

  reverse() {
    let current = this.head;
    let previous = null;

    while (current) {
      let next = current.next;
      current.next = previous;
      [previous, current] = [current, next];
    }

    [this.head, this.tall] = [this.tall, this.head];
  }
}

const list = new LinkedList();
console.log(list);

console.log(list.append(1));
console.log(list);

list.append(2);
list.append(3);
list.append(4);

list.printData();

console.log(list.search(3));
console.log(list.search(4));
console.log(list.search(5));

list.printData();
list.remove(1);
list.printData();
console.log(list);

console.log('-----');
console.log('reverse list');
list.printData();
list.reverse();
list.printData();
console.log(list);


function printList(list) {
  if (list.head) {
    list = list.head;
  }

  console.log(list.data);
  if (list.next) {
    printList(list.next);
  }
}
console.log('print list external function');
printList(list);
