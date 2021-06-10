class Channel {
  private observers: IObserver[] = [];
 
  public subsribe(o: IObserver) {
    if (this.observers.includes(o)) {
      console.log('Already subscribed.');
      return;
    }

    this.observers.push(o);
    console.log('Subscribed');
  } 

  public unsubscribe(o: IObserver) {
    this.observers = this.observers.filter(ob => o !== ob);
  }

  public notifyAll() {
    this.observers.forEach(o => o.notify());
  }

};

interface IObserver {
  notify(): void;
};

class Email implements IObserver {
  public notify(): void {
    console.log('Email:notify()');
  }
};

class Desktop implements IObserver {
  public notify(): void {
    console.log('Desktop:notify()');
  }
};

const email = new Email();
const desktop = new Desktop();

const c = new Channel();
c.subsribe(email);
c.subsribe(email);
c.subsribe(desktop);
c.notifyAll();
c.unsubscribe(email);
c.notifyAll();
