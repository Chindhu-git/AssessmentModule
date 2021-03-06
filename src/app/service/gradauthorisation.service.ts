import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { strict } from 'assert';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

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
  public showProfile(email)
  {
    return this.http.post("http://localhost:8080/login/grad/profile/profilelist",email,{responseType: 'text'});
  }
  public showAssignments()
  {
    return this.http.get<any>("http://localhost:8080/login/grad/assignment/show");
  }
  public uploadNow(submittedassignment)
  {
    return this.http.post("http://localhost:8080/login/grad/assignment/submit",submittedassignment,{responseType:'text' as 'json'});
  }
  public showProjects()
  {
    return this.http.get<any>("http://localhost:8080/login/grad/project/show");
  }
  public submitProject(submittedproject)
  {
    return this.http.post("http://localhost:8080/login/grad/project/submit",submittedproject,{responseType:'text' as 'json'});
  }
  public showPerformance(email:string)
  {
    return this.http.get<any>("http://localhost:8080/login/grad/showperformance/"+email);
  }
  public showQuiz()
  {
    return this.http.get<any>("http://localhost:8080/login/grad/quiz/show");
  }
}
