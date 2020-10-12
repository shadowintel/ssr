import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApidocService {
  apiUrl = environment.apiUrl;
  constructor(
    private http: HttpClient
  ) { }

  checkApikey(apiKey: string): Observable<any> {
    return this.http.get<any>(this.apiUrl + `checkApiKey?apiKey=${apiKey}`);
  }

  serach(query: any, apiKey:string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'api-key': apiKey
      })
    };
    return this.http.post<any>(this.apiUrl + 'search', query, httpOptions);
  }
}
