import { ApolloClient, InMemoryCache } from "@apollo/client";
const isServer = typeof window === "undefined";

const client = new ApolloClient({
    ssrMode: isServer,
    uri: "http://localhost:4000",
    cache: new InMemoryCache(),
});

export default client;