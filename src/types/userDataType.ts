export const userTypeDefs = `#graphql
type Geo {
    lat: String
    lng: String
}
type Company{
    name: String
    catchPhrase: String
    bs: String
}
type Address {
    street: String
    suite: String
    city: String
    zipcode: String
    geo: Geo
}
  type User {
    id: String
    name: String
    username:String
    email:String
    address:Address
    phone: String
    website:String
    company:Company
  }

  type Query {
    users: [User]
  }
`;

module.exports = { userTypeDefs };
