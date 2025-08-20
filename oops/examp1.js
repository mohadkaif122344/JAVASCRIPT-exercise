class Car {
constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}
   d() {
        console.log(`${this.year} ${this.make} ${this.model}`);

   }
     
}
let c1 = new Car("Toyota", "corolla", 2021);
let c2 = new Car("Honda", "civic", 2020);
c1.d();
c2.d();
