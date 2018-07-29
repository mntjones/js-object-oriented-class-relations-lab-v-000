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
    // returns trip with matching driver Ids
    // map returns new array, after performing some function on
    // original array (calling trip.passenger -> gets passenger)
    return this.trips().map( trip => {
      return trip.passenger();
    });
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
    return this.trips().map( trip => {
      return trip.driver();
    });
  }
}

class Trip {
  constructor(driver, passenger){
    this.id = ++tripId;
    stored.trips.push(this);
    
    if(driver){
      this.driverId = driver.id
    }
    
    if(passenger){
      this.passengerId = passenger.id
    }
  }
  
  driver() {
    return stored.drivers.find(driver => {
      return driver.id === this.driverId;
    });

  }
  
  passenger() {
    return stored.passengers.find( passenger => {
        return passenger.id === this.passengerId;
    });
  }
  
}