import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-addquestions',
  templateUrl: './addquestions.component.html',
  styleUrls: ['./addquestions.component.css']
})
export class AddquestionsComponent implements OnInit {

  public email: string;
  constructor() { }

  ngOnInit(): void {
    this.email=sessionStorage.getItem('loggedTrainer');
  }
  
  /*"angular-material": "^1.1.23",
  "./node_modules/@angular/material/prebuilt-themes/indigo-pink.css",
  "./node_modules/@angular/material/prebuilt-themes/indigo-pink.css",
  "@angular/material": {
      "version": "9.2.4",
      "resolved": "https://registry.npmjs.org/@angular/material/-/material-9.2.4.tgz",
      "integrity": "sha512-LkoTXE6B0slvMhvfZDdPWaz4yaYLkaAp5VSPunI9pxGsPxzqEV9e210wC1/sjG/76Nk8Ep7/2z9XKac8Q9bMwA=="
    },
  */
}
