import dotenv from 'dotenv';
dotenv.config();

// TODO: Define an interface for the Coordinates object
// interface Coordinates {
//   lat: number;
//   lon: number;
// };

// TODO: Define a class for the Weather object
// class Weather {
//   cityName: string;
//   date: number;
//   temp: number;
//   wind: number;
//   humidity: number;

//   constructor(cityName: string, date: number, temp: number, wind: number, humidity: number) {
//     this.cityName = cityName;
//     this.date = date;
//     this.temp = temp;
//     this.wind = wind;
//     this.humidity = humidity;
//   }
// };

// TODO: Complete the WeatherService class
class WeatherService {
  // TODO: Define the baseURL, API key, and city name properties
  private baseURL?: string;
  private apiKey?: string;
  private cityName: string;
  constructor() {
    this.baseURL = process.env.API_BASE_URL || '';

    this.apiKey = process.env.API_KEY || '';

    this.cityName = '';
  }

  // TODO: Create fetchLocationData method
  // private async fetchLocationData(query: string) {
  //   const cityName = query;

  //   return cityName;
  // }

  // TODO: Create destructureLocationData method
  // private destructureLocationData(locationData: Coordinates): Coordinates {
  //   const currentCoordinates = locationData;

  //   return currentCoordinates;
  // }

  // TODO: Create buildGeocodeQuery method
  // private buildGeocodeQuery(): string {
  //return `${this.cityName.lat}, ${this.cityName.lon}`;
  // }
  // TODO: Create buildWeatherQuery method
  // private buildWeatherQuery(coordinates: Coordinates): string {}

  // TODO: Create fetchAndDestructureLocationData method
  // private async fetchAndDestructureLocationData() {}

  // TODO: Create fetchWeatherData method
  // private async fetchWeatherData(coordinates: Coordinates) {
  //   try {
  //     const coordURL = await fetch(`${process.env.API_BASE_URL}/data/2.5/weather?lat=${coordinates.lat}}&lon=${coordinates.lon}&appid=${process.env.API_KEY}`);



  //   } catch (error: any) {
  //     throw new Error(error);
  //   }
  // }

  // TODO: Build parseCurrentWeather method
  // private parseCurrentWeather(response: any) {

  // }

  // TODO: Complete buildForecastArray method
  // private buildForecastArray(currentWeather: Weather, weatherData: any[]) {
    // const weatherURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=$${lon}&appid=${process.env.API_KEY}`;
  // }

  // TODO: Complete getWeatherForCity method
  async getWeatherForCity(city: string) {
    try {
      const response = await fetch (`${this.baseURL}/data/2.5/weather?q=${city}}&appid=${this.apiKey}`);

      const data = await response.json();
      
      city = this.cityName;
      console.log(data);
    } catch (error: any) {
      throw new Error(error);
    }
  }
}

export default new WeatherService();
