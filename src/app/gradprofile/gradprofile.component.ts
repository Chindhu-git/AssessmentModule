import { Component, OnInit } from '@angular/core';
import { GradauthorisationService } from '../service/gradauthorisation.service';
import { Router} from '@angular/router';
import { stringify } from 'querystring';

@Component({
  selector: 'app-gradprofile',
  templateUrl: './gradprofile.component.html',
  styleUrls: ['./gradprofile.component.css']
})
export class GradprofileComponent implements OnInit {

  public email : string;
  public id: string;
  public name: string;
  public course: string;
  public frontendmentor: string;
  public backendmentor: string;


  constructor(private service: GradauthorisationService, private router: Router) { }

  ngOnInit(): void {
    this.email=sessionStorage.getItem('loggedUser');
    let resp=this.service.showProfile(this.email);
    

    resp.subscribe((str)=>{
      var data=str.split(",");
      this.id=data[0];
      this.name=data[1];
      this.course=data[2];
      this.frontendmentor=data[3];
      this.backendmentor=data[4];
    });
  }

}
