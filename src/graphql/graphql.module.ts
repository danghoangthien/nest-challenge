import { Module } from '@nestjs/common';
import { GraphqlService } from './graphql.service';
import { StockPriceResolver } from './stock-price/stock-price.resolver';

@Module({
  providers: [GraphqlService, StockPriceResolver]
})
export class GraphqlModule {}
