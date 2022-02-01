"use strict";
console.log("=====================================================");
//functions:
//  pop(remove top of stack),
//  peek(show top of stack),

let letters = [];
let word = "racecar";
let reversed = "";

// push letters of word into stack
for (var i = 0; i < word.length; i++) {
  letters.push(word[i]); //each Character
}
console.log("letters", letters);

// pop off the stack in reverse order
for (let i = 0; i < word.length; i++) {
  reversed += letters.pop(); //add one letter at a time, pop last in stack
}
console.log("reversed", reversed);

if (reversed === word) {
  console.log("is palindrome");
} else {
  console.log("not palindrome");
}
console.log("=====================================================");
//create stack

class Stack {
  constructor(value) {
    this.count = 0;
    this.storage = {};

    //adds value at the end
    this.push = function (value) {
      this.storage[this.count] = value;
      this.count++;
    };

    //removes and returns value at end of stac
    this.pop = function () {
      if (this.count === 0) {
        //nothing in stack
        return undefined;
      }
      this.count--;
      var result = this.storage[this.count];
      delete this.storage[this.count];
      return result;
    };

    //size of stack
    this.size = function () {
      return this.count;
    };

    //returns peek but doesnt delete it
    this.peek = function () {
      return this.storage[this.count - 1];
    };
  }
}

var myStack = new Stack();

myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
console.log("=====================================================");
