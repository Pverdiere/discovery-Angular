import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Training } from './interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  serveurUrl = "http://localhost:3000"

  constructor(
    private http: HttpClient
  ) { }

  getTrainings(): Observable<Training[]>{
    const token = localStorage.getItem("token");
    return this.http.get<Training[]>(
      this.serveurUrl+"/training/list",
      {headers:new HttpHeaders().set("Authorization","Bearer "+token)}
    )
  }

  getTrainingDetails(id:number): Observable<any>{
    const token = localStorage.getItem("token");
    return this.http.get<any>(
      this.serveurUrl+`/training/${id}`,
      {headers:new HttpHeaders().set("Authorization", "Bearer "+token)}
    )
  }

  updateTraining(training:Training): Observable<any>{
    const token = localStorage.getItem("token")
    return this.http.put<any>(
      this.serveurUrl+`/training/${training.id}/update`,
      training,
      {headers:new HttpHeaders().set("Authorization", "Bearer "+token)}
    )
  }

  createTraining(training:Training): Observable<Training>{
    const token = localStorage.getItem("token");
    return this.http.post<Training>(
      this.serveurUrl+"/training/create",
      training,
      {headers:new HttpHeaders().set("Authorization", "Bearer "+token)}
    )
  }

  deleteTraining(id:number): Observable<Training>{
    const token = localStorage.getItem("token");
    return this.http.delete<Training>(
      this.serveurUrl+"/training/delete",
      {headers:new HttpHeaders().set("Authorization", "Bearer "+token)}
    )
  }
}
