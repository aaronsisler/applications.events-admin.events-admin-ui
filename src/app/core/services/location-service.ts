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

  getList(establishmentId: string): Observable<Location[]> {
    return this.http
      .get<Location[]>(
        `${environment.apiUrl}/establishments/${establishmentId}/locations`
      )
      .pipe(
        map((response: Location[]) => {
          return response;
        })
      );
  }

  postList(establishmentId: string, locations: Location[]): Observable<any> {
    const headers = new HttpHeaders({ "Content-Type": "application/json" });
    return this.http.post(
      `${environment.apiUrl}/establishments/${establishmentId}/locations`,
      locations,
      {
        headers: headers,
      }
    );
  }
}
