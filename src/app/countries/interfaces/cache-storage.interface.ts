import { Country } from "./country";

export interface CacheStore{
  byCapital: {
    term: string;
    countries: Country[];
  }
}

