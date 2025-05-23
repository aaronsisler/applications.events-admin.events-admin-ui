import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map, Observable } from "rxjs";

import { environment } from "../../../environments/environment";
import { Oraganizer } from "../models/organizer";

@Injectable({
  providedIn: "root",
})
export class OrganizerService {
  constructor(private http: HttpClient) {}

  getList(): Observable<Oraganizer[]> {
    return this.http.get<Oraganizer[]>(`${environment.apiUrl}/organizers`).pipe(
      map((response: Oraganizer[]) => {
        return response;
      })
    );
  }

  postList(organizers: Oraganizer[]): Observable<any> {
    const headers = new HttpHeaders({ "Content-Type": "application/json" });
    return this.http.post(`${environment.apiUrl}/organizers`, organizers, {
      headers: headers,
    });
  }
}
