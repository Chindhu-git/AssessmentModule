import { Component, OnInit } from '@angular/core';
import { AddQuestions } from './addquestions';
import { TrainerauthorisationService } from '../service/trainerauthorisation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addquestions',
  templateUrl: './addquestions.component.html',
  styleUrls: ['./addquestions.component.css']
})
export class AddquestionsComponent implements OnInit {

  public email: string;
  public message: any;
  addQuestions: AddQuestions=new AddQuestions("","","","","","","");
  constructor(private service: TrainerauthorisationService, private router: Router) { }
  

  ngOnInit(): void {
    this.email=sessionStorage.getItem('loggedTrainer');
    this.addQuestions.quiz_name=sessionStorage.getItem('UploadedQuiz');
  }
  public addNow()
  {
    //console.log(this.addQuestions);
    let resp=this.service.addQue(this.addQuestions);
    resp.subscribe((data)=>{
      if(data==="Uploaded Successfully")
      {
        this.addQuestions.que="";
        this.addQuestions.opta="";
        this.addQuestions.optb="";
        this.addQuestions.optc="";
        this.addQuestions.optd="";
        this.addQuestions.ans="";
      }
      else 
      {
        this.message=data;
      }
    });
  }
  public submitNow()
  {
    let resp=this.service.addQue(this.addQuestions);
    resp.subscribe((data)=>{
      if(data==="Uploaded Successfully")
      {
        this.router.navigateByUrl('/login/trainer/trainerquiz');
      }
      else 
      {
        this.message=data;
      }
    });
  }
  /*"angular-material": "^1.1.23",
  "./node_modules/@angular/material/prebuilt-themes/indigo-pink.css",
  "./node_modules/@angular/material/prebuilt-themes/indigo-pink.css",
  "@angular/material": {
      "version": "9.2.4",
      "resolved": "https://registry.npmjs.org/@angular/material/-/material-9.2.4.tgz",
      "integrity": "sha512-LkoTXE6B0slvMhvfZDdPWaz4yaYLkaAp5VSPunI9pxGsPxzqEV9e210wC1/sjG/76Nk8Ep7/2z9XKac8Q9bMwA=="
    },
  */
  }