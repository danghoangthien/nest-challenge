export class AlphaVantageResponse {
  // Define the structure of the response data here
  // You can adjust this based on the actual response from Alpha Vantage
  metaData: {
    // Metadata properties
  };
  timeSeries: {
    // Time series data
    [key: string]: {
      open: string;
      high: string;
      low: string;
      close: string;
      volume: string;
    };
  };
}
