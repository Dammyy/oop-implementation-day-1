//  This a simple Class "Footballer" with a constructor that takes in "name" and has an instance method "play"
class Footballer {
  constructor(name) {
    this.name = name;
  }

  play() {
    console.log("\nMy name is "+ this.name +". I am a Footballer");
  }
}

let player = new Footballer("C.Ronaldo");
player.play();


//Inheritance: I extended the above Footballer class to a subtype of footballers, a Striker

class Striker extends Footballer {
  constructor(name) {
    super(name); 
  }

  play() {
    super.play();
    console.log("I am a striker");
   
  }

  purpose() {
    console.log("My Job is to Score goals.\n")
  }
}

let player2 = new Striker("C.Ronaldo");
player2.play();
player2.purpose();

// Making the polymorphism extension of the class

class Club extends Footballer {
        constructor (name, club) {
          super(name);
          this._club = club;
        }
        
     play() {
    super.play();
    console.log("I play for "+ this._club + "\n");
  }
  }
  
let player3 = new Club("C.Ronaldo","Real Madrid");
player3.play();
  
  // Encapsulation : Data hiding inside the constructor making it only accessible by its own methods
  
  class Goals {
    constructor(goals, number) {
        Object.assign(this, {
            total() {
                
                
                    number();

            }
        });
    }
}
  
 let scoring = new Goals(50, () => console.log('I score More than 40 goals per season'));
scoring.total();
  
  
  
  