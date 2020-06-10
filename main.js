const LinkedList = require("./buildList");

function main() {
  let SLL = new LinkedList();

  SLL.insertLast("Apollo");
  SLL.insertLast("Boomer");
  SLL.insertLast("Helo");
  SLL.insertLast("Husker");
  SLL.insertLast("Starbuck");
  SLL.insertLast("Tauhida");
  SLL.remove("Husker");

  console.log(SLL);
}

main();
