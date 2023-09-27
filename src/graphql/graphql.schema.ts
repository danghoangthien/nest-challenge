import { join } from 'path';
import { GraphQLSchema } from 'graphql';
import { makeExecutableSchema } from 'graphql-tools';

// import { StockPriceResolver } from './stock-price/stock-price.resolver';

// const resolvers = [StockPriceResolver];

export const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs: `
    type StockPrice {
      // Define the fields you want to expose in your GraphQL schema here
    }

    type Query {
      getStockPrice(input: StockPriceInput!): StockPrice
    }

    input StockPriceInput {
      symbol: String!
    }
  `,
});