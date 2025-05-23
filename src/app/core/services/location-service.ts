import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map, Observable } from "rxjs";

import { Location } from "../models/location";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class LocationService {
  constructor(private http: HttpClient) {}

  getList(): Observable<Location[]> {
    return this.http.get<Location[]>(`${environment.apiUrl}/locations`).pipe(
      map((response: Location[]) => {
        return response;
      })
    );
  }

  postList(locations: Location[]): Observable<any> {
    const headers = new HttpHeaders({ "Content-Type": "application/json" });
    return this.http.post(`${environment.apiUrl}/locations`, locations, {
      headers: headers,
    });
  }
}
