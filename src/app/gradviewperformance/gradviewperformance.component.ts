import { Component, OnInit } from '@angular/core';
import {GradauthorisationService} from '../service/gradauthorisation.service';
import {GradViewPerformance} from './gradviewperformance';
import { Router} from '@angular/router';

@Component({
  selector: 'app-gradviewperformance',
  templateUrl: './gradviewperformance.component.html',
  styleUrls: ['./gradviewperformance.component.css']
})
export class GradviewperformanceComponent implements OnInit {

  public email: string;
  rowData=[];
  addrow={};
  colDefs=[];
  gradViewPerformance: GradViewPerformance[]=[];
  columnDefs: { headerName: string; field: string; }[];
  constructor(private service: GradauthorisationService, private router: Router) { }

  ngOnInit(): void {
    this.email=sessionStorage.getItem('loggedUser');
    this.showPerformance();
  }
  public showPerformance()
  {
    let resp=this.service.showPerformance(this.email);
    resp.subscribe((data :any[])=>{
      this.gradViewPerformance=data;
      
      for(let gradViewPerformances of this.gradViewPerformance)
      {
          this.addrow["title"]=gradViewPerformances.title;
          this.addrow["specification"]=gradViewPerformances.specification;
          this.addrow["score"]=gradViewPerformances.score;
          this.rowData=this.rowData.concat(this.addrow);
          this.addrow={};
      }
      this.columnDefs = [
        {headerName: 'Title', field: 'title' },
        {headerName: 'Specification', field: 'specification'},
        {headerName: 'Score', field: 'score' },
      ];
    });
  }

}
