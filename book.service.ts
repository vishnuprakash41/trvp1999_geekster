import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private _httpClient:HttpClient) { }

  saveBook(books : any[]) : Observable<any>{
    return this._httpClient.post("https://vishnuhttp-cd5c6-default-rtdb.firebaseio.com/data.json",books)
  }
  getBook() : Observable<any>{
    return this._httpClient.get("https://vishnuhttp-cd5c6-default-rtdb.firebaseio.com/data.json")
  }
}
