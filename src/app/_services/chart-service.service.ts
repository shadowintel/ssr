import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
// import { Country, CountryStatus } from './models';

const BASE_URL = `https://api.covid19api.com/`;
const COVID_URL = {
  COUNTRIES: `${BASE_URL}countries`,
  BY_COUNTRY: (country: string) => `${BASE_URL}dayone/country/${country}`,
}

@Injectable({
  providedIn: 'root'
})
export class ChartServiceService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }
  getCountries$ = this.http.get<any[]>(COVID_URL.COUNTRIES);

  getCasesByCountry = (countrySlug: string) => {
    return this.http.get<any[]>(`${COVID_URL.BY_COUNTRY(countrySlug)}`)
  }

  getRansomware(): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'ransomware');
  }
}
