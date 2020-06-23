import { Component, OnInit } from '@angular/core';
import {GradauthorisationService} from '../service/gradauthorisation.service';
import {GradQuiz} from './gradquiz';
import { Router} from '@angular/router';

@Component({
  selector: 'app-gradquiz',
  templateUrl: './gradquiz.component.html',
  styleUrls: ['./gradquiz.component.css']
})
export class GradquizComponent implements OnInit {
  public email: string;
  rowData=[];
  addrow={};
  colDefs=[];
  gradQuiz: GradQuiz[]=[];
  columnDefs: { headerName: string; field: string; }[];
  constructor(private service: GradauthorisationService, private router: Router) { }

  ngOnInit(): void {
    this.email=sessionStorage.getItem('loggedUser');
    this.showQuiz();
  }
  public showQuiz()
  {
    let resp=this.service.showQuiz();
    resp.subscribe((data :any[])=>{
      console.log(data);
      this.gradQuiz=data;
      
      for(let gradQuizs of this.gradQuiz)
      {
          this.addrow["email"]=gradQuizs.email;
          this.addrow["title"]=gradQuizs.title;
          this.rowData=this.rowData.concat(this.addrow);
          this.addrow={};
      }
      this.columnDefs = [
        {headerName: 'Posted By', field: 'email' },
        {headerName: 'Title', field: 'title' }
      ];
    });
  }
  public onRowClicked(event)
  {
    sessionStorage.setItem('loggedEmail', event.data.email);
    sessionStorage.setItem('loggedQuiz', event.data.title);
    this.router.navigateByUrl('/login/grad/gradquiz/submit');
  }
}
