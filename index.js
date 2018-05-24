const store = {
  drivers: [],
  passengers: [],
  trips: []
};

let driverId = 0;
class Driver {
  constructor(name){
    this.id = ++driverId;
    this.name = name;
    store.drivers.push(this);
  }
  
  trips(){
    return store.trips.filter( t => {return t.driverId === this.id} );
  }
  
  passengers(){ this.trips.map( t => t.passenger() ) }
}

let passengerId = 0;
class Passenger {
  constructor(name){
    this.id = ++passengerId;
    this.name = name;
    store.passengers.push(this);
  }
  trips(){}
  drivers(){}
}

let tripId = 0;
class Trip {
  constructor(driver, passenger){
    this.id = ++tripId;
    this.driverId = driver.id;
    this.passengerId = passenger.id;
    store.trips.push(this);
  }
  driver(){}
  passenger(){}
}