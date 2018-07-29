let driverId = 0;
let passengerId = 0;
let tripId = 0;
let stored = {drivers: [], passengers: [], trips: []}

class Driver {
  constructor (name, id) {
    this.name = name
    this.id = ++driverId;
    stored.drivers.push(this)
  }
  
  trips() {
    
  }
  
  passengers() {
    
  }
}

class Passenger {
  constructor (name, id) {
    this.name = name
    this.id = ++passengerId;
    stored.passengers.push(this)
  }
  
  trips() {
    
  }
  
  drivers() {
    
  }
}

class Trip {
  constructor(id, driverId, passengerId){
    this.id = ++tripId;
    this.driverId = driverId;
    this.passengerId = passengerId;
    stored.trips.push(this)
  }
  
  driver() {
    
  }
  
  passenger() {
    
  }
  
}