import { Component, OnInit } from '@angular/core';
import {CreateAssignment} from './createassignment';
import {TrainerauthorisationService} from '../service/trainerauthorisation.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-createassignment',
  templateUrl: './createassignment.component.html',
  styleUrls: ['./createassignment.component.css']
})
export class CreateassignmentComponent implements OnInit {

  public email: string;
  public message :any;
  createassignment: CreateAssignment=new CreateAssignment("","","");
  constructor(private service: TrainerauthorisationService, private router: Router) { }

  ngOnInit(): void {
    this.email=sessionStorage.getItem('loggedTrainer');
  }
  public saveAssignments()
  {
    this.createassignment.email=this.email;
    console.log(this.createassignment.description);
    let resp=this.service.saveAssignments(this.createassignment);
    resp.subscribe((data)=>{
      if(data==="Saved Successfully")
      {
        this.router.navigateByUrl('/login/trainer/trainerassignments');
      }
      else 
      {
        this.message=data;
      }
    });
  }

}
