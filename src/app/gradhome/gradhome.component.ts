import { Component, OnInit } from '@angular/core';
import {GradComponent} from '../grad/grad.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-gradhome',
  templateUrl: './gradhome.component.html',
  styleUrls: ['./gradhome.component.css']
})
export class GradhomeComponent implements OnInit {

  private gradComponent : GradComponent;
  public email : String;
  constructor() {
   }
   
  ngOnInit(): void {
      this.email=sessionStorage.getItem('loggedUser');
  }

}