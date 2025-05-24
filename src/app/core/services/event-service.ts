import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map, Observable } from "rxjs";

import { environment } from "../../../environments/environment";
import { Event } from "../models/event";

@Injectable({
  providedIn: "root",
})
export class EventService {
  constructor(private http: HttpClient) {}

  getList(establishmentId: string): Observable<Event[]> {
    return this.http
      .get<Event[]>(
        `${environment.apiUrl}/establishments/${establishmentId}/events`
      )
      .pipe(
        map((response: Event[]) => {
          return response;
        })
      );
  }

  postList(establishmentId: string, events: Event[]): Observable<any> {
    const headers = new HttpHeaders({ "Content-Type": "application/json" });
    return this.http.post(
      `${environment.apiUrl}/establishments/${establishmentId}/events`,
      events,
      {
        headers: headers,
      }
    );
  }
}
