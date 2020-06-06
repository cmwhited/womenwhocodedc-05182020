import { ApolloServer } from 'apollo-server-lambda';
import { APIGatewayProxyEvent, Context } from 'aws-lambda';

import { typeDefs, resolvers } from './graphql/schema';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({
    event,
    context,
  }): Promise<{
    headers: { [key: string]: string };
    functionName: string;
    event: APIGatewayProxyEvent;
    context: Context;
  }> => {
    return {
      headers: event.headers,
      functionName: context.functionName,
      event,
      context,
    };
  },
});

export const graphqlHandler = server.createHandler({
  cors: {
    origin: '*',
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Accept', 'Authorization'],
  },
});
