import { userData } from "../data/userData";

// This resolver retrieves books from the "books" array above.
export const userResolvers = {
  Query: {
    users: () => userData,
  },
};

module.exports = { userResolvers };
