import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map, Observable } from "rxjs";

import { environment } from "../../../environments/environment";
import { EventSchedule } from "../models/event-schedule";

@Injectable({
  providedIn: "root",
})
export class EventScheduleService {
  constructor(private http: HttpClient) {}

  getList(establishmentId: string): Observable<EventSchedule[]> {
    return this.http
      .get<EventSchedule[]>(
        `${environment.apiUrl}/establishments/${establishmentId}/event-schedules`
      )
      .pipe(
        map((response: EventSchedule[]) => {
          return response;
        })
      );
  }

  postList(
    establishmentId: string,
    eventSchedules: EventSchedule[]
  ): Observable<any> {
    const headers = new HttpHeaders({ "Content-Type": "application/json" });
    return this.http.post(
      `${environment.apiUrl}/establishments/${establishmentId}/event-schedules`,
      eventSchedules,
      {
        headers: headers,
      }
    );
  }
}
