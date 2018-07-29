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
    stored.trips.push(this);
    
    this.driver = driverId;
    this.passenger = passengerId;
    
  }
  
  driver() {
    return stored.drivers.find(driver => {
      return driver.id === this.driverId;
    });

  }
  
  passenger() {
    return store.passengers.find( passenger => {
        return passenger.id === this.passengerId;
    });
  }
  
}