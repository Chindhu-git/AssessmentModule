import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { strict } from 'assert';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class TrainerauthorisationService {

  constructor(private http:HttpClient) { }

  public doTrainerLogin(trainerlogin)
  {
      let temp=new String(trainerlogin.email);
      console.log("temp="+temp);
      return this.http.post("http://localhost:8080/login/trainer/authenticate",trainerlogin,{responseType: 'text' as 'json'});
  }
  public showProfile(email)
  {
    return this.http.post("http://localhost:8080/login/trainer/profile/profilelist",email,{responseType: 'text'});
  }
  public saveAssignments(createassignment)
  {
    return this.http.post("http://localhost:8080/login/trainer/assignment/create",createassignment,{responseType: 'text' as 'json'});
  }
  public showAssignments(email:string)
  {
    return this.http.get<any>("http://localhost:8080/login/trainer/assignment/show/"+email);
  }
  public viewAssignments(assignment_name:string)
  {
    return this.http.get<any>("http://localhost:8080/login/trainer/assignment/view/"+assignment_name); 
  }
  public evaluateAssignments(evaluatesubmission)
  {
    return this.http.post("http://localhost:8080/login/trainer/assignment/evaluate",evaluatesubmission,{responseType: 'text' as 'json'});
  }
  public saveProjects(createProject)
  {
    return this.http.post("http://localhost:8080/login/trainer/project/create",createProject,{responseType: 'text' as 'json'});
  }
  public showProjects(email: string)
  {
    return this.http.get<any>("http://localhost:8080/login/trainer/project/show/"+email); 
  }
  public viewProjects(project_name:string)
  {
    return this.http.get<any>("http://localhost:8080/login/trainer/project/view/"+project_name); 
  }
  public evaluateProjects(evaluateProject)
  {
    return this.http.post("http://localhost:8080/login/trainer/project/evaluate",evaluateProject,{responseType: 'text' as 'json'});
  }
  public saveQuiz(createQuiz)
  {
    return this.http.post("http://localhost:8080/login/trainer/quiz/create",createQuiz,{responseType: 'text' as 'json'});
  }
  public showQuiz(email: string)
  {
    return this.http.get<any>("http://localhost:8080/login/trainer/quiz/show/"+email); 
  }
  public addQue(addQuestions)
  {
    return this.http.post("http://localhost:8080/login/trainer/quiz/add",addQuestions,{responseType: 'text' as 'json'});
  }
}
 