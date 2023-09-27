import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class StockPriceInput {
  @Field()
  symbol: string;
}
