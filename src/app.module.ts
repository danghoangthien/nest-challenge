import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { GraphQLModule } from '@nestjs/graphql';
import { AppService } from './app.service';
import { GraphqlModule } from './graphql/graphql.module';
import { StockPriceService } from './services/stock-price/stock-price.service';
import { StockPriceResolver } from './graphql/stock-price/stock-price.resolver';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/graphql/graphql.service.ts',
    }),
  ],
  controllers: [],
  providers: [StockPriceService, StockPriceResolver],
})
export class AppModule {}
