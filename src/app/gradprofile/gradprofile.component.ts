import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gradprofile',
  templateUrl: './gradprofile.component.html',
  styleUrls: ['./gradprofile.component.css']
})
export class GradprofileComponent implements OnInit {

  public email : String;

  constructor() { }

  ngOnInit(): void {
    this.email=sessionStorage.getItem('loggedUser');
  }

}
