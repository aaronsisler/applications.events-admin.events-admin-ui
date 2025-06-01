import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";

import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class CsvFileService {
  constructor(private http: HttpClient) {}

  get(establishmentId: string, filename: string): Observable<string> {
    return this.http
      .get<string>(
        `${environment.apiUrl}/establishments/${establishmentId}/files/${filename}`
      )
      .pipe(
        map((response: string) => {
          return response;
        })
      );
  }
}
