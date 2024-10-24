import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor(public http: HttpClient) { }

  // Return Observable so the component can subscribe to it
  SearchForFlight(body: any): Observable<any> {
    return this.http.post('https://localhost:7117/api/Flight/FetchFlightBasedOnUserSearch' , body);
    console.log('service time');
  }

  // Return Observable for the cities
  GetAllCiies(): Observable<string[]> {
    return this.http.get<string[]>('https://localhost:7117/api/City/GetAllCities');
  }
  GetAllFacilitesByDegree(id: number): Observable<any> {
    return this.http.get('https://localhost:7117/api/Flight/GetAllFacilitesByDegreeId/' + id);
  }
  
 
}
