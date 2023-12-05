class Key {
  private signature: number;
  constructor() {
    this.signature = Math.random();
  }

  public getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}

  getKey(): Key {
    return key;
  }
}

abstract class House {
  private tenants: Person[] = [];
  public door: boolean = false;

  constructor(protected key: Key) {}

  public comeIn(person: Person) {
    if (this.door) {
      this.tenants.push(person);
    }
  }

  abstract openDoor(key: Key);
}

class MyHouse extends House {
  openDoor(key: Key) {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
    }
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
