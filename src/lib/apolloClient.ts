import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
  from,
} from '@apollo/client'
import { onError } from "@apollo/client/link/error";

const operationNameLink = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers = {} }) => ({
    headers: {
      'x-gql-operation-name': operation.operationName,
      ...headers,
    },
  }))
  return forward(operation)
})

const loggerLink = new ApolloLink((operation, forward) => {
  const time = +new Date();

  return forward(operation).map((data) => {
    console.log(`${operation.operationName} (${+new Date() - time} ms)`);
    return data;
  })
})

const errorLink = onError(({ graphQLErrors, networkError, forward, operation }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
  return forward(operation)
});

const httpLink = new HttpLink({ uri: 'http://localhost:3001' })

export const client = new ApolloClient({
  link: from([errorLink, operationNameLink, loggerLink, httpLink]),
  cache: new InMemoryCache(),
})
