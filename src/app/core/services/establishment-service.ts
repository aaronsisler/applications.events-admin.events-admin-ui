import { Injectable } from "@angular/core";
import { Establishment } from "../../pages/establishment/establishment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class EstablishmentService {
  constructor(private http: HttpClient) {}

  getList(): Observable<Establishment[]> {
    return this.http
      .get<Establishment[]>(`${environment.apiUrl}/establishments`)
      .pipe(
        map((response: Establishment[]) => {
          return response;
        })
      );
  }

  postList(establishments: Establishment[]): Observable<any> {
    const headers = new HttpHeaders({ "Content-Type": "application/json" });
    return this.http.post(
      `${environment.apiUrl}/establishments`,
      establishments,
      { headers: headers }
    );
  }
}
