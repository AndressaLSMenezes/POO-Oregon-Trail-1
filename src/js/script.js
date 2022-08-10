class Traveler {
    constructor(name) {
      this.name = name
      this.food = 1
      this.isHealthy =true
    }
  
    hunt() {
      this.food += 2
    }
    eat() {
      if(this.food > 0) {
        this.food -= 1
      }
      else {
        this.isHealthy = false
      }
    }
  }

class Wagon {
  constructor(capacity) {
    this.capacity = capacity
    this.passengers = []
  }
  getAvailableSeatCount() {
    return this.capacity - this.passengers.length 
  }
  join(name) {
    if(this.passengers.length < this.capacity) {
      this.passengers.push(name)
    }
  }
  shouldQuarantine() {
    function healthy(element) {
      if (element.isHealthy == false) {
        return true
      }
    }
    if(this.passengers.some(healthy)) {
      return true
    }
  }
  totalFood() {
    let food = []
    this.passengers.forEach((element) => {
      return food.push(element.food)
    })
    let total = food.reduce((acc, act) => {
      return acc + act
    }, 0)
    return total
  }
}


// Criar uma carroça que comporta 2 pessoas
let wagon = new Wagon(2);
// Criar três viajantes
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let maude = new Traveler('Maude');

console.log(`${wagon.getAvailableSeatCount()} should be 2`);

wagon.join(henrietta);
console.log(`${wagon.getAvailableSeatCount()} should be 1`);

wagon.join(juan);
wagon.join(maude); // Não tem espaço para ela!
console.log(`${wagon.getAvailableSeatCount()} should be 0`);

henrietta.hunt(); // pega mais comida
juan.eat();
juan.eat(); // juan agora está com fome (doente)

console.log(`${wagon.shouldQuarantine()} should be true since juan is sick`);
console.log(`${wagon.totalFood()} should be 3`);