import { Resolver, Query, Args } from '@nestjs/graphql';
import { StockPriceService } from './../../services/stock-price/stock-price.service';
import { StockPriceInput } from './../../dto/stock-price.input/stock-price.input';
import { AlphaVantageResponse } from 'src/dto/alpha-vantage-response.dto/alpha-vantage-response.dto';

@Resolver('AlphaVantageResponse')
export class StockPriceResolver {
  constructor(private readonly stockPriceService: StockPriceService) {}

  @Query(returns => AlphaVantageResponse)
  async getStockPrice(@Args('input') input: StockPriceInput) {
    const { symbol } = input;
    return this.stockPriceService.getStockPrice(symbol);
  }
}