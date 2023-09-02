import { Region } from 'src/app/countries/interfaces/region.type';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, delay, map, of, tap } from 'rxjs';
import { Country } from '../interfaces/country';
import { CacheStore } from '../interfaces/cache-storage.interface';



@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private apiUrl: string = 'https://restcountries.com/v3.1';

  public cacheStorage: CacheStore = {
    byCapital: { term: '', countries: [] },
    byCountries: { term: '', countries: [] },
    byRegion: { region: '', countries: [] },
  };

  constructor(private http: HttpClient) { }

  private saveToLocalStorage() { }

  private loadFromLocalStorage(){}

  /**
   * Sends an HTTP GET request to the specified URL and returns an observable of an array of Country objects.
   * @param url The URL to send the request to.
   * @returns An observable of an array of Country objects.
   */
  private getCountriesRequest(url: string): Observable<Country[]> {
    return this.http.get<Country[]>(url).pipe(
      catchError(() => of([])),
      delay(500)
    );
  }

  /**
   * Searches for a country by its ID.
   * @param id The ID of the country to search for.
   * @returns An observable of the found country or null if not found.
   */
  searchCountryById(id: string): Observable<Country | null> {
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country[]>(url).pipe(
      map(countries => countries.length > 0 ? countries[0] : null),
      catchError(() => of(null))
    );
  }

  /**
   * Searches for countries by their capital.
   * @param term The capital term to search for.
   * @returns An observable of an array of countries matching the capital term.
   */
  searchCapital(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${term}`;
    return this.getCountriesRequest(url).pipe(
      tap(countries => this.cacheStorage.byCapital = {term,countries})
    )
  }

  /**
   * Searches for countries by their name.
   * @param term The country name term to search for.
   * @returns An observable of an array of countries matching the country name term.
   */
  searchCountry(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${term}`;
    return this.getCountriesRequest(url).pipe(
      tap(countries => this.cacheStorage.byCountries = {term,countries})
    )
  }

  /**
   * Searches for countries by their region.
   * @param region The region to search for.
   * @returns An observable of an array of countries matching the region.
   */
  searchRegion(region: Region): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${region}`;
    return this.getCountriesRequest(url).pipe(
      tap(countries => this.cacheStorage.byRegion = {region,countries})
    )
  }
}
