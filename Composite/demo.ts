interface IUnit {
  move(): void
  shoot(): void
}

class Marine implements IUnit {
  move() { console.log('Marine:move'); }
  shoot() { console.log('Marine:shoot'); }
}

class Biomass implements IUnit {
  private units: IUnit[] = [];

  get getUnits(): IUnit[] {
    return this.units;
  }

  add(u: IUnit) { this.units.push(u); }
  remove(u: IUnit) {
    this.units = [...this.units.filter(unit => u !== unit)];
  }

  move() {
    this.units.forEach(u => u.move());
  }

  shoot() {
    this.units.forEach(u => u.shoot());
  }

}

const bio = new Biomass();
console.log('Bio: ', bio.getUnits.length);

const zbyszko = new Marine();
bio.add(zbyszko);
console.log('Bio: ', bio.getUnits.length);
bio.move();
bio.remove(zbyszko);
console.log('Bio: ', bio.getUnits.length);

for (let j = 0; j < 10; ++j) bio.add(new Marine());
console.log('Bio: ', bio.getUnits.length);

bio.shoot();
