class Vehicle {
  //Using the public in the constructor param is the same that declare color: string and in the constructor call this.color = color
  constructor(public color: string) {}

  protected honk(): void {
    console.log('beep');
  }
}

//You can't call honk here because is protected (only in child classes)
const vehicle = new Vehicle('orange');
console.log(vehicle.color);

//Use extends for Inheritance
class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private drive(): void {
    console.log('vroom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

//Will overwrite parent behavior
const car = new Car(4, 'red');
car.startDrivingProcess();
