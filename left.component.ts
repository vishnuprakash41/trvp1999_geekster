import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {
  // userform : FormGroup | undefined

  // constructor() { }

  // ngOnInit(): void {
  //   this.userform = new FormGroup({
  //     'firstname' : new FormControl(null),
  //     'lastname' : new FormControl(null),
  //     'email' : new FormControl(null),
  //     'gender' : new FormControl(null),
  //     'ismarried' : new FormControl(null),
  //     'country' : new FormControl(null),
  //     'city' : new FormControl(null),
  //     'street' : new FormControl(null),
  //     'pincopde' : new FormControl(null),
  //   })
  // }
  
  bookForm!: FormGroup;
  mybooks : any[] = [];

  constructor(private _book : BookService) { }

  ngOnInit(): void {
    this.bookForm = new FormGroup({
      'bookid' : new FormControl(null),
      'bookname' : new FormControl(null),
      'author' : new FormControl(null)
    });
  }
  
  onPushBook() {
    const bookid = this.bookForm.get('bookid')?.value;
    const bookname = this.bookForm.get('bookname')?.value;
    const author = this.bookForm.get('author')?.value;

    this.mybooks.push({
      bookid : bookid,
      bookname : bookname,
      author : author
    });
  }

  onSave(){
    this._book.saveBook(this.mybooks)
    .subscribe(sub => {
      console.log(sub);
    },
    error =>{
      console.log(error);
    });
    
  }
  onGet(){
    this._book.getBook()
    .subscribe(sub => {
      console.log(sub);
    },
    error =>{
      console.log(error);
    });
    
  }

}
