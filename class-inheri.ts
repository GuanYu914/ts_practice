class Person {
  name: string;
  constructor(name: string) {
    this.name = name
  }
  dance() {
    console.log(this.name + " is dancing")
  }
}

class AwesomePerson extends Person {
  dance() {
    console.log(this.name + ' is dancing so awesome')
  }
}

var emory = new AwesomePerson('emory');
emory.dance();