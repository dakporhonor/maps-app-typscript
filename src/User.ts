import faker from 'faker';

export class User {
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
}
