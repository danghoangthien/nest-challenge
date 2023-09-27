import { Test, TestingModule } from '@nestjs/testing';
import { StockPriceResolver } from './stock-price.resolver';

describe('StockPriceResolver', () => {
  let resolver: StockPriceResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StockPriceResolver],
    }).compile();

    resolver = module.get<StockPriceResolver>(StockPriceResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
