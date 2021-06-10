interface IPad {
  useLighting(): void;
}

interface IPhone {
  useUSBC(): void;
}

class iPad2017 implements IPad {
  useLighting() { console.log('iPad2017:useLighting'); }
}

class iPhone12 implements IPhone {
  useUSBC() { console.log('iPhone12:useUSBC'); }
}

class ChargeAdapter implements IPhone {
  constructor(private _ipad: IPad) { }

  useUSBC() {
    console.log('ChargeAdapter:useUSBC');
    this._ipad.useLighting();
  }
}

const ipad = new iPad2017();
const adapter = new ChargeAdapter(ipad);
adapter.useUSBC();
