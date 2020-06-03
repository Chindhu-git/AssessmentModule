import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { TrainerLogin } from './trainerlogin';
import { TrainerauthorisationService } from '../service/trainerauthorisation.service';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent implements OnInit {

  trainerlogin: TrainerLogin=new TrainerLogin("","");
  message:any;
  public email : string;

  constructor(private service: TrainerauthorisationService, private router: Router) { }

  ngOnInit(): void {
  }

  public trainerLoginNow()
  {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
      let resp=this.service.doTrainerLogin(this.trainerlogin);
      resp.subscribe((data)=>{
          if(data==="Authenticated")
          {
            sessionStorage.setItem('loggedTrainer', this.trainerlogin.email);
            this.router.navigateByUrl('/login/trainer/trainerhome');
          }
          else 
          {
            this.message=data;
          }
      });
  }
}
