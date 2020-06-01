import { Component, OnInit } from '@angular/core';
import {GradComponent} from '/home/chindhu/assessmentProj/src/app/grad/grad.component';

@Component({
  selector: 'app-gradhome',
  templateUrl: './gradhome.component.html',
  styleUrls: ['./gradhome.component.css']
})
export class GradhomeComponent implements OnInit {

  email: String;
  constructor() { }

  ngOnInit(): void {
  }

}
