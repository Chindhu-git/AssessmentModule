import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trainerquiz',
  templateUrl: './trainerquiz.component.html',
  styleUrls: ['./trainerquiz.component.css']
})
export class TrainerquizComponent implements OnInit {
  public email: string;
  constructor() { }

  ngOnInit(): void {
    this.email=sessionStorage.getItem('loggedTrainer');
  }

}
