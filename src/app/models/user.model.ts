export interface Address { 
  address: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
      lat: string,
      lng: string,
    }
  },
}

export interface User extends Address {
  id: number,
  name: string,
  username: string,
  email: string,
  phone: string,
  website: string,
  company: {
    name: string,
    catchPhrase: string,
    bs: string,
  }
}