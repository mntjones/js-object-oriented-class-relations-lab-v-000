let driverId = 0;
let passengerId = 0;
let tripId = 0;
let stored = {drivers: [], passengers: [], trips: []}

class Driver {
  constructor (name) {
    this.name = name
    this.id = ++driverId;
    stored.drivers.push(this)
  }
  
  trips() {
    return stored.trips.filter(trip => {
      return trip.driverId === this.id
    })
  }
  
  passengers() {
    
  }
}

class Passenger {
  constructor (name) {
    this.name = name
    this.id = ++passengerId;
    stored.passengers.push(this)
  }
  
  trips() {
    return stored.trips.filter(trip => {
      return trip.passengerId === this.id
    })
  }
  
  drivers() {
    
  }
}

class Trip {
  constructor(driver, passenger){
    this.id = ++tripId;
    
    this.driver = driverId;
    this.passenger = passengerId;
    stored.trips.push(this);
  }
  
  driver() {
    
  }
  
  passenger() {
    
  }
  
}