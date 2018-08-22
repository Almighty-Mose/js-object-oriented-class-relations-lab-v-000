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

let tripId = 0;

class Trip {
  constructor(driver, passenger) {
    this.driverId = driver.id;
    this.passengerId = passenger.id;
    this.id = ++tripId;
    
    store.trips.push(this);
  }
  
  // user(){
  //   return store.users.find(function(user){
  //     return user.id === this.userId
  //   })
  
  driver() {
    return store.drivers.find(function(driver) {
      return driver.id === this.driverId;
    });
  }
  
  passenger() {
    
  }
}