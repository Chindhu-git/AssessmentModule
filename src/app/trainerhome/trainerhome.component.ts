import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trainerhome',
  templateUrl: './trainerhome.component.html',
  styleUrls: ['./trainerhome.component.css']
})
export class TrainerhomeComponent implements OnInit {

  public email : String;
  constructor() { }

  ngOnInit(): void {
    this.email=sessionStorage.getItem('loggedTrainer');
  }

}
