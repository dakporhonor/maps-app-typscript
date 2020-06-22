import faker from 'faker';
import { Mappable } from './CustomMap';

export class User implements Mappable {
  // Type declaration
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    // Initialization
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
  mapperContent(): string {
    return `<h1>User Name is ${this.name}</h1>`;
  }
}
