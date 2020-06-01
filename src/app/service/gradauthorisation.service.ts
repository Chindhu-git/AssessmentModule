import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { strict } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class GradauthorisationService {

  constructor(private http:HttpClient) { }

  public doGragLogin(gradlogin)
  {
      let temp=new String(gradlogin.email);
      console.log("temp="+temp);
      return this.http.post("http://localhost:8080/login/grad/authenticate",gradlogin,{responseType: 'text' as 'json'});
  }
}
