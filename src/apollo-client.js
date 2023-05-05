import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient ({
    uri: 'https://woofgang.hasura.app/v1/graphql', //base URL API graphql
    cache: new InMemoryCache(), //setting untuk menambahan cache
    headers: {
        'x-hasura-admin-secret': 'q5GKKOXlwnsnMxGKHqO1QwI5HTp57FUgL28MXmVh7lc2ILNlzhHylLjK5KAlE2gy'
        //diambil dari console hasura
    }
})

export default client 
