//---------------------------------Day-05 QNo-03----------------------------------------

//---------------------Write a “person” class to hold all the details---------------------

 class Person {
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
  
    set setCollege(collegeName) {
      this.college = collegeName;
    }
  
    get getCollege() {
      return this.college;
    }
  
    set setOccupation(work) {
      this.occupation = work;
    }
  
    get getOccupation() {
      return this.occupation;
    }
  
    set setLocation(city) {
      this.location = city;
    }
  
    get getLocation() {
      return this.setLocation;
    }
  }
  
  const person1 = new Person("SIVA", "SHANKAR", 25);
  person1.setCollege = "Anna University";
  person1.setOccupation = "NOT YET WORKING";
  person1.setLocation = "Tamil Nadu";
  console.log(person1);
