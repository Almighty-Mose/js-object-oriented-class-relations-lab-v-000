let store = {drivers: [], passengers: [], trips: []}

let driverId = 0;

class Driver {
  constructor(name) {
    this.name = name;
    this.id = ++driverId;
    
    store.drivers.push(this);
  }
  
  trips() {
    
  }
  
  passengers() {
    
  }
}

let passengerId = 0;

class Passenger {
  constructor(name) {
    this.name = name;
    this.id = ++passengerId;
    
    store.passengers.push(this);
  }
  
  trips() {
    
  }
  
  drivers() {
    
  }
}