import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  springEndPoint:string;

  constructor(private http:HttpClient) { 

    this.springEndPoint="http://localhost:3000";
   
  }

  getAllUser(){
    const url= this.springEndPoint+"/members";
    return this.http.get(url);
  }
}