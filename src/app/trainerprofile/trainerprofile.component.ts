import { Component, OnInit } from '@angular/core';
import { TrainerauthorisationService } from '../service/trainerauthorisation.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-trainerprofile',
  templateUrl: './trainerprofile.component.html',
  styleUrls: ['./trainerprofile.component.css']
})
export class TrainerprofileComponent implements OnInit {

  public email : string;
  public id: string;
  public name: string;
  public team: string;

  constructor(private service: TrainerauthorisationService, private router: Router)
  {

  }

  ngOnInit(): void {
    this.email=sessionStorage.getItem('loggedTrainer');
    let resp=this.service.showProfile(this.email);
    

    resp.subscribe((str)=>{
      var data=str.split(",");
      this.id=data[0];
      this.name=data[1];
      this.team=data[2];
    });

  }

}
