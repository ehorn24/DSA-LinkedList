const _Node = require("./Node");

class LinkedList {
  constructor() {
    //head indicates beginning of list. always contains the 1st node
    this.head = null;
  }

  //insert item at beginning of list
  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  //insert item at end of list
  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  //insert new node before a given node containing a key
  insertBefore(item, beforeNode, key) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      //not sure what to do here
    }
  }

  //insert new node after a node containing a key
  insertAfter(item, afterNode, key) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      //not sure what to do here
    }
  }

  //insert an item at a specific position
  insertAt(item, position) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      //same as above
    }
  }

  //retrieve values
  find(item) {
    //start at the head
    let currNode = this.head;
    //return null if list is empty
    if (!this.head) {
      return null;
    }
    //check for the item
    while (currNode.value !== item) {
      //return null if end of the list is reached and the item is not there
      if (currNode.next === null) {
        return null;
        //otherwise, keep looking
      } else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }

  //remove an item
  remove(item) {
    //return null if list is empty
    if (!this.head) {
      return null;
    }
    //if the node to removed is at the beginning (head), make the next node the head
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    //start at beginning of the list
    let currNode = this.head;
    //keep track of the previous
    let previousNode = this.head;
    //while the list still has more items and the value has not been found yet, save the previous node
    while ((currNode !== null) & (currNode.value !== item)) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    //if end of list is reached and item isn't there, log error
    if (currNode === null) {
      console.log("Item not found!");
      return;
    }
    previousNode.next = currNode.next;
  }
}

module.exports = LinkedList;
