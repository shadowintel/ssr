import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ScheduleramsomeService {
  apiUrl = environment.apiUrl;
  public industriesData = [
    {
      view: 'Technology & Media', value: 'TM'
    },
    {
      view: 'Financial Services', value: 'FS'
    },
    {
      view: 'Life Sciences', value: 'LS'
    },
    {
      view: 'Manufacturing & Industrials', value: 'MI'
    },
    {
      view: 'Professional & Consumer Services', value: 'PCS'
    },
    {
      view: 'Public Services', value: 'PS'
    },
    {
      view: 'All', value: 'AL'
    }
  ];

  constructor(private http: HttpClient) { }

  getScheduleData(date) {
    return this.http.post<any>(this.apiUrl + 'getscheduledata', date);
  }

}
