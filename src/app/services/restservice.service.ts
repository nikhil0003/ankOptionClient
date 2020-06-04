import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestserviceService {

  constructor(private http :HttpClient) { }

  getoneBook(){
    let url = 'http://localhost:8080/getOption';
    const httpOptions = {
      headers: new HttpHeaders({
       'Content-Type':  'application/json',
      })
    };
     console.log("before getoneBook GetBookService");
     return this.http.get(url,httpOptions);
    }
}
