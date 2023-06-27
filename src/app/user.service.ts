import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from './interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  serverUrl = "http://localhost:3000"

  constructor(
    private http: HttpClient
  ) { }

  login(user: User): Observable<any>{
    return this.http.post<any>(this.serverUrl+"/login",user)
  }

  getUsers(): Observable<User[]>{
    const token = localStorage.getItem("token");
    return this.http.get<User[]>(
      this.serverUrl+"/user/list",
      {headers:new HttpHeaders().set("Authorization","Bearer "+token)}
    )
  }

  getUserAllDetails(id:number): Observable<any>{
    const token = localStorage.getItem("token");
    return this.http.get<any>(
      this.serverUrl+`/user/${id}/allDetails`,
      {headers:new HttpHeaders().set("Authorization", "Bearer "+token)}
    )
  }
}
