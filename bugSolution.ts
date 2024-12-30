function greeter(person: string): string {
  return "Hello, " + person;
}

function greeterArray(person: string[]): string {
  return "Hello, " + person.join(" ");
}

let user = ["Jane", "Doe"];
console.log(greeterArray(user)); // Output: Hello, Jane Doe

let singleUser = "Jane Doe";
console.log(greeter(singleUser)); //Output: Hello, Jane Doe