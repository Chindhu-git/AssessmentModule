import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewsubmission',
  templateUrl: './viewsubmission.component.html',
  styleUrls: ['./viewsubmission.component.css']
})
export class ViewsubmissionComponent implements OnInit {

  public email: string;
  public title: string;
  public description: string;
  constructor() { }

  ngOnInit(): void {
    this.email=sessionStorage.getItem('loggedEmail');
    this.title=sessionStorage.getItem('loggedTitle');
    this.description=sessionStorage.getItem('loggedDescription');
  }

}
