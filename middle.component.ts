import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.css'],
})
export class MiddleComponent implements OnInit {
  BookId: number = 3;
  BookName: string = 'Thulasi';
  BookStatus: string = 'Available';
  Author: string = 'Bala';

  btntoggle: Boolean = true;

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.btntoggle = false;
    }, 2000);
  }

  clickpannu() {
    if (this.BookStatus == 'Available') {
      this.BookStatus = 'Notavailable';
    } else {
      this.BookStatus = 'Available';
    }
  }
}
