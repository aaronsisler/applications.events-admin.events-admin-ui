import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";

import { environment } from "../../../environments/environment";
import { User } from "../models/user";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private http: HttpClient) {}

  get(userId: string): Observable<User> {
    return this.http.get<User>(`${environment.apiUrl}/users/${userId}`).pipe(
      map((response: User) => {
        return response;
      })
    );
  }
}
