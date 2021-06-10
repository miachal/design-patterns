interface IAbstractFactory {
  createLandUnit(): void
  createAirUnit(): void
}

interface IAbstractLandUnit {
  run(): void
}

interface IAbstractAirUnit {
  fly(): void
}

class Zerg implements IAbstractFactory {
  createLandUnit() { return new Zergling(); }
  createAirUnit() { return new Corruptor(); }
}

class Zergling implements IAbstractLandUnit { run() { } }
class Corruptor implements IAbstractAirUnit { fly() { console.log('Corruptor:fly'); } }

class Terran implements IAbstractFactory {
  createLandUnit() { return new Marine(); }
  createAirUnit() { return new Viking(); }
}

class Marine implements IAbstractLandUnit { run() { console.log('Marine:run'); } }
class Viking implements IAbstractAirUnit { fly() { } }

class Protoss implements IAbstractFactory {
  createLandUnit() { return new Zealot(); }
  createAirUnit() { return new Void(); }
}

class Zealot implements IAbstractLandUnit { run() { } }
class Void implements IAbstractAirUnit { fly() { } }


const t = new Terran();
const z = new Zerg();
const p = new Protoss();


const marine = t.createLandUnit();
marine.run();

const corruptor = z.createAirUnit();
corruptor.fly();