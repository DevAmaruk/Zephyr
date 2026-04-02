export interface SettingsInterface {
  language: 'en' | 'fr';
  theme: 'system' | 'light' | 'dark';
  temperatureUnit: 'celsius' | 'fahrenheit';
  windSpeedUnit: 'kmh' | 'mph' | 'ms' | 'kn';
  precipitationUnit: 'mm' | 'inch';
}
