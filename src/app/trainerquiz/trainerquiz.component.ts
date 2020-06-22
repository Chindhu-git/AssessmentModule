import { Component, OnInit } from '@angular/core';
import {TrainerauthorisationService} from '../service/trainerauthorisation.service';
import {TrainerQuiz} from './trainerquiz';
import { Router} from '@angular/router';

@Component({
  selector: 'app-trainerquiz',
  templateUrl: './trainerquiz.component.html',
  styleUrls: ['./trainerquiz.component.css']
})
export class TrainerquizComponent implements OnInit {
  public email: string;
  rowData=[];
  addrow={};
  colDefs=[];
  trainerQuiz: TrainerQuiz[]=[];
  columnDefs: { headerName: string; field: string; }[];
  constructor(private service: TrainerauthorisationService, private router: Router) { }

  ngOnInit(): void {
    this.email=sessionStorage.getItem('loggedTrainer');
    this.showQuiz();
  }
  public showQuiz()
  {
    let resp=this.service.showQuiz(this.email);
    resp.subscribe((data: any[])=>{
      this.trainerQuiz=data;
      for(let trainerQuizs of this.trainerQuiz)
      {
          this.addrow["email"]=trainerQuizs.email;
          this.addrow["title"]=trainerQuizs.title;
          this.rowData=this.rowData.concat(this.addrow);
          this.addrow={};
      }
      this.columnDefs = [
        {headerName: 'Posted By', field: 'email' },
        {headerName: 'Title', field: 'title' },
      ];
    });
  }

}
