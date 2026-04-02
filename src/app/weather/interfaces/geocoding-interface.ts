export interface GeocodingInterface {
  results: GeocodingResult[];
}

export interface GeocodingResult {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  country_code: string;
  country: string;
  postcodes: string[];
}
