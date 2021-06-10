interface IIterator<T> {
  current(): T
  nextOne(): T
  isValid(): boolean
}

interface IAggregator {
  getIterator(): IIterator<Queen>
}

class QueenIterator implements IIterator<Queen> {
  constructor(private _swarm: Swarm, private _state: number = 0) { }

  current(): Queen {
    return this._swarm.queens[this._state];
  }

  nextOne(): Queen {
    const q = this.current();
    this._state++;
    return q;
  }

  isValid() {
    return this._state < this._swarm.size;
  }
}

class Swarm implements IAggregator {
  private _queens: Queen[] = [];

  get queens() {
    return this._queens;
  }

  get size() {
    return this._queens.length;
  }

  addQueen(q: Queen) {
    this._queens.push(q);
  }

  getIterator() {
    return new QueenIterator(this);
  }

}

class Queen {
  constructor(private _mana: number = 0) { }

  nest() {
    if (this._mana >= 25) {
      console.log(`Queen:nest (M: ${this._mana})`);
      this._mana -= 25;
    }
  }
};

const swarm = new Swarm();
[
  new Queen(30),
  new Queen(20),
  new Queen(50)
].forEach(q => swarm.addQueen(q));

const it = swarm.getIterator();
while (it.isValid()) {
  it.nextOne().nest();
}

for (let it = swarm.getIterator(); it.isValid(); it.nextOne()) {
  it.current().nest();
}