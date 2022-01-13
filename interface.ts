interface Person {
  name: string
  age?: string
}

function getPersonName(Person: Person) {
  console.log(Person.name)
}

getPersonName({ name: 'emory' });
getPersonName({ name: 'fish' })