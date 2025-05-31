import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map, Observable } from "rxjs";

import { environment } from "../../../environments/environment";
import { ScheduledEvent } from "../models/scheduled-event";

@Injectable({
  providedIn: "root",
})
export class ScheduledEventService {
  constructor(private http: HttpClient) {}

  getList(eventScheduleId: string): Observable<ScheduledEvent[]> {
    return this.http
      .get<ScheduledEvent[]>(
        `${environment.apiUrl}/event-schedules/${eventScheduleId}/scheduled-events`
      )
      .pipe(
        map((response: ScheduledEvent[]) => {
          return response;
        })
      );
  }

  postList(
    eventScheduleId: string,
    scheduledEvents: ScheduledEvent[]
  ): Observable<any> {
    const headers = new HttpHeaders({ "Content-Type": "application/json" });
    return this.http.post(
      `${environment.apiUrl}/event-schedules/${eventScheduleId}/scheduled-events`,
      scheduledEvents,
      {
        headers: headers,
      }
    );
  }
}
