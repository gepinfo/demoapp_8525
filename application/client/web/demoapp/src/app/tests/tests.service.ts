import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
    providedIn: 'root'
})

export class TestsService {
    constructor(
        private http: HttpClient,
    ) { }


  BaseURL = environment.WEB_API;


  PostAlltestsValues(data:any){
    return this.http.post(`${this.BaseURL}/tests`,data);
  }

  GetAlltestsValues(){
    return this.http.get(`${this.BaseURL}/tests`);
  }

  Updatetests(data:any){
    return this.http.put(`${this.BaseURL}/tests/${data.id}`,data);
  }

  getSpecifictests(id:number){
    return this.http.get(`${this.BaseURL}/tests/${id}`);
  }

  getSpecifictestsHistory(id:number){
    return this.http.get(`${this.BaseURL}/tests/${id}/history?days=30`);
  }

  DeletetestsValues(dataId:any){
     return this.http.delete(`${this.BaseURL}/tests/${dataId}`);
  }

  GetEntityById(testsId:any): Observable<any> {
    return this.http.get(`${this.BaseURL}/testsid/` + testsId);
  }

  Searchtests(data:any): Observable<any> {
    const temp:any = [];
    const objectKeyPair = Object.entries(data);
    objectKeyPair.forEach((element, index) => {
    if (element[1]) {
    temp.push(`${element[0]}=${element[1]}`);
    }
    });
    let jwt_token = sessionStorage.getItem('JwtToken');
    return this.http.get(`${this.BaseURL}` + `/tests/get/search?jwt_token=${jwt_token}${temp.length > 0 ? `&${temp.join('&')}` : ''}`);
  }
}