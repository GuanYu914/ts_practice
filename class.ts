class Person {
  name: string;
  saying: string;

  constructor(name: string, saying: string) {
    this.name = name;
    this.saying = saying;
  }

  static getClassName(): string {
    return 'Person Class'
  }

  getPersonName(): string {
    return this.name;
  }
}

console.log(Person.getClassName());
var emory = new Person('emory', 'holo');
console.log(emory.getPersonName())