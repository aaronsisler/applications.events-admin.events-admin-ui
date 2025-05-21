import { Injectable } from "@angular/core";
import { Establishment } from "../../pages/establishment/establishment";
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class EstablishmentService {
  private apiUrl = "https://localhost:8443/establishments";

  constructor(private http: HttpClient) {}

  getList(): Observable<Establishment[]> {
    return this.http.get<Establishment[]>(this.apiUrl).pipe(
      map((response: Establishment[]) => {
        return response;
      })
    );
  }
}
