import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { Router } from '@angular/router';
import { GradLogin } from './gradlogin';
import { GradauthorisationService } from '../service/gradauthorisation.service';


@Component({
  selector: 'app-grad',
  templateUrl: './grad.component.html',
  styleUrls: ['./grad.component.css']
})
export class GradComponent implements OnInit {

  gradlogin: GradLogin=new GradLogin("","");
  message:any;

  constructor(private service: GradauthorisationService){}

  ngOnInit(): void {
  }

  public gradLoginNow()
  {
      console.log("hey world!");                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
      let resp=this.service.doGragLogin(this.gradlogin);
      resp.subscribe((data)=>this.message=data);
  }
}
