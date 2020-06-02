import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { Router} from '@angular/router';
import { GradLogin } from './gradlogin';
import { GradauthorisationService } from '../service/gradauthorisation.service';
import { strict } from 'assert';
import { stringify } from 'querystring';

@Component({
  selector: 'app-grad',
  templateUrl: './grad.component.html',
  styleUrls: ['./grad.component.css']
})
export class GradComponent implements OnInit {

  gradlogin: GradLogin=new GradLogin("","");
  message:any;
  public email : string;

  constructor(private service: GradauthorisationService, private router: Router){
  }

  ngOnInit(): void {
  }

  public gradLoginNow()
  {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
      let resp=this.service.doGragLogin(this.gradlogin);
      resp.subscribe((data)=>{
          if(data==="Authenticated")
          {
            sessionStorage.setItem('loggedUser', this.gradlogin.email);
            this.router.navigateByUrl('/login/grad/gradhome');
          }
          else 
          {
            this.message=data;
          }
      });
  }
}
