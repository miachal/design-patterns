interface IWorker {
  recruit(): void;
}

class SCV implements IWorker {
  recruit() { }
}

class Drone implements IWorker {
  recruit() { }
}

class Probe implements IWorker {
  recruit() { }
}

abstract class Base {
  abstract createWorker(): IWorker;
}

class CommandCenter extends Base {
  createWorker() {
    return new SCV();
  }
}

class Hatchery extends Base {
  createWorker() {
    return new Drone();
  }
}

class Nexus extends Base {
  createWorker() {
    return new Probe();
  }
}


const commander = (base: Base) => base.createWorker();
[
  new CommandCenter(),
  new Hatchery(),
  new Nexus()
].forEach(c => commander(c));
