import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApisrvcService {

  constructor(public http: HttpClient) { }
  apifun(): Observable<any>{
    return this.http.get("https://randomuser.me/api/")
  }
}