import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css']
})
export class RightComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  countryList: any[] = [
    {"countryname" : "India"},
    {"countryname" : "USA"},
    {"countryname" : "Russia"}
  ];

  onsubmit(myForm : NgForm){
    console.log(myForm);
  }

}
