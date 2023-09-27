import { Injectable } from '@nestjs/common';
import axios from 'axios';

import { AlphaVantageResponse } from 'src/dto/alpha-vantage-response.dto/alpha-vantage-response.dto';

@Injectable()
export class StockPriceService {
  private readonly alphaVantageBaseUrl = 'https://www.alphavantage.co/query';
  private readonly apiKey = process.env.ALPHA_VANTAGE_API_KEY;

  async getStockPrice(symbol: string): Promise<AlphaVantageResponse> {
    try {
      const response = await axios.get<AlphaVantageResponse>(this.alphaVantageBaseUrl, {
        params: {
          function: 'TIME_SERIES_INTRADAY',
          symbol,
          interval: '1min', // You can adjust this interval as needed
          apikey: this.apiKey,
        },
      });

      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch stock price for ${symbol}: ${error.message}`);
    }
  }
}
