import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map, Observable } from "rxjs";

import { environment } from "../../../environments/environment";
import { PublishedEventSchedule } from "../models/published-event-schedule";

@Injectable({
  providedIn: "root",
})
export class PublishedEventScheduleService {
  constructor(private http: HttpClient) {}

  getList(establishmentId: string): Observable<PublishedEventSchedule[]> {
    return this.http
      .get<PublishedEventSchedule[]>(
        `${environment.apiUrl}/establishments/${establishmentId}/published-event-schedules`
      )
      .pipe(
        map((response: PublishedEventSchedule[]) => {
          return response;
        })
      );
  }

  post(
    establishmentId: string,
    publishedEventSchedule: PublishedEventSchedule
  ): Observable<any> {
    const headers = new HttpHeaders({ "Content-Type": "application/json" });
    return this.http.post(
      `${environment.apiUrl}/establishments/${establishmentId}/published-event-schedules`,
      publishedEventSchedule,
      {
        headers: headers,
      }
    );
  }
}
