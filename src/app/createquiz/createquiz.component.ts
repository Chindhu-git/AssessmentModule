import { Component, OnInit } from '@angular/core';
import {CreateQuiz} from './createquiz';
import {TrainerauthorisationService} from '../service/trainerauthorisation.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-createquiz',
  templateUrl: './createquiz.component.html',
  styleUrls: ['./createquiz.component.css']
})
export class CreatequizComponent implements OnInit {
  public email: string;
  public message :any;
  createQuiz: CreateQuiz=new CreateQuiz("","");

  constructor(private service: TrainerauthorisationService, private router: Router) { }

  ngOnInit(): void {
    this.email=sessionStorage.getItem('loggedTrainer');
  }
  public saveQuiz()
  {
    this.createQuiz.email=this.email;
    sessionStorage.setItem('UploadedQuiz', this.createQuiz.title);
    let resp=this.service.saveQuiz(this.createQuiz);
    resp.subscribe((data)=>{
      if(data==="Saved Successfully")
      {
        this.router.navigateByUrl('/login/trainer/trainerquiz/add');
      }
      else 
      {
        this.message=data;
      }
    });
  }

}
