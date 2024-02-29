import { ApolloServer } from "@apollo/server";
import typeDefs from "../schema/book";
import resolvers from "../resolvers";
export const server = new ApolloServer({
    typeDefs,
    resolvers,
});
export default server;
