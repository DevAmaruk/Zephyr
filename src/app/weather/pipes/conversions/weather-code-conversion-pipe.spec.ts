import { WeatherCodeConversionPipe } from './weather-code-conversion-pipe';

describe('WeatherCodeConversionPipe', () => {
  it('create an instance', () => {
    const pipe = new WeatherCodeConversionPipe();
    expect(pipe).toBeTruthy();
  });
});
