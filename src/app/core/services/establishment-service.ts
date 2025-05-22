import { Injectable } from "@angular/core";
import { Establishment } from "../../pages/establishment/establishment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class EstablishmentService {
  private apiUrl = "http://localhost:8080/establishments";

  constructor(private http: HttpClient) {}

  getList(): Observable<Establishment[]> {
    return this.http.get<Establishment[]>(this.apiUrl).pipe(
      map((response: Establishment[]) => {
        return response;
      })
    );
  }

  postList(establishments: Establishment[]): Observable<any> {
    const headers = new HttpHeaders({ "Content-Type": "application/json" });
    return this.http.post(this.apiUrl, establishments, { headers: headers });
  }
}
