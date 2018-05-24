const store = {
  drivers: [],
  passengers: [],
  trips: []
};

let driverId = 0;
class Driver {
  constructor(name){
    this.id   = ++driverId;
    this.name = name;
  }
  trips(){}
  passengers(){}
}

let passengerId = 0;
class Passenger {
  constructor(name){
    this.id   = ++passengerId;
    this.name = name;
  }
}