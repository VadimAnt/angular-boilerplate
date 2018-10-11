export interface IUser {
  id: Number;
  name: String;
  username: String,
  email: String,
  phone: String,
  webdite: String,
  company: {
    name: String,
    catchPhrace: String,
    bs: String,
  },
  address: {
    street: String,
    suite: String,
    city: String,
    zipcode: String,
    geo: {
      lat: String,
      lng: String,
    }
  },
}