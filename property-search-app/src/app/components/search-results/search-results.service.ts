import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchResultsService {

  constructor(private _http: HttpClient) { }

  getSearchResults(destination, checkIn, checkOut, adults, children, rooms, ratePreference): Observable<any> {
    return this._http.get<any>('https://propertysearch.app.dev.digifabricpcf.com/api/hotel?location='
      + destination + '&startdate=' + checkIn + '&enddate=' + checkOut + '&numberofrooms=' + rooms + '&numberofadults=' + adults);
  }
}
