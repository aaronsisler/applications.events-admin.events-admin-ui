import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map, Observable } from "rxjs";

import { environment } from "../../../environments/environment";
import { Organizer } from "../models/organizer";

@Injectable({
  providedIn: "root",
})
export class OrganizerService {
  constructor(private http: HttpClient) {}

  getList(establishmentId: string): Observable<Organizer[]> {
    return this.http
      .get<Organizer[]>(
        `${environment.apiUrl}/establishments/${establishmentId}/organizers`
      )
      .pipe(
        map((response: Organizer[]) => {
          return response;
        })
      );
  }

  postList(establishmentId: string, organizers: Organizer[]): Observable<any> {
    const headers = new HttpHeaders({ "Content-Type": "application/json" });
    return this.http.post(
      `${environment.apiUrl}/establishments/${establishmentId}/organizers`,
      organizers,
      {
        headers: headers,
      }
    );
  }
}
