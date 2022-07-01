// Your code here
class Person {
  constructor(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  introduce(){
    console.log(`Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`);
  }

  static introducePeople(array){
    if(!Array.isArray(array)){
      return console.log('introducePeople only takes an array as an argument')
    }

    let isInClass = true;
    for(let i = 0; i < array.length; i++){
      let person = array[i];
      if(!(person instanceof Person)){
        isInClass = false;
      }
    }

    if(isInClass == false){
      return console.log('All items in array must be Person class instances');
    }
    else if(isInClass){
      for(let i = 0; i < array.length; i++){
        let person = array[i];
        person.introduce();
      }
      }
  }
}

const person = new Person('kristen', 'chauncey', 38);
const person2 = new Person('jeff', 'granoff', 30)

let test2 = [person, person2];
let test3 = [person, 5]
Person.introducePeople(15, 20, 'test test');
Person.introducePeople(test2);
Person.introducePeople(test3);


/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Person;
} catch {
  module.exports = null;
}
