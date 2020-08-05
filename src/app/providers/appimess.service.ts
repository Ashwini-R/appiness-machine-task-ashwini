import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable, throwError } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AppimessService {
  gitHubApiUrl = environment.gitHubUrl;
  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<any> {
    return this.http.get(`${this.gitHubApiUrl}/users`);
  }

  getUserByUserName(userName): Observable<any> {
    return this.http.get(`${this.gitHubApiUrl}/users/${userName}`);
  }

  getReposByUserName(userName): Observable<any> {
    return this.http.get(`${this.gitHubApiUrl}/users/${userName}/repos`);
  }

  searchUserByUserName(userName): Observable<any> {
    return this.http.get(`${this.gitHubApiUrl}/search/users?q=${userName}`);
  }
}
