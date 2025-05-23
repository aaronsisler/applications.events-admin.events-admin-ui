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

  getList(): Observable<Organizer[]> {
    return this.http.get<Organizer[]>(`${environment.apiUrl}/organizers`).pipe(
      map((response: Organizer[]) => {
        return response;
      })
    );
  }

  postList(organizers: Organizer[]): Observable<any> {
    const headers = new HttpHeaders({ "Content-Type": "application/json" });
    return this.http.post(`${environment.apiUrl}/organizers`, organizers, {
      headers: headers,
    });
  }
}
