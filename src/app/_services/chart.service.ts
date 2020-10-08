import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChartService {
  apiUrl = environment.apiUrl; // put the api url here
  constructor(private http: HttpClient) { }

  getRansomware(): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'ransomware');
  }

  getRansomeCountPerRansomware(): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'ransomCount');
  }

  getRansomeCountPerCountry(): Observable<any> {
    return this.http.get<any[]>(this.apiUrl + 'ransomCountPerCountry');
  }

  getSectorCount(): Observable<any> {
    return this.http.get<any[]>(this.apiUrl + 'sectorCount');
  }

  getIndutry(): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'getIndustriy');
  }

  getRevenue(): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'getRevenue');
  }
}
