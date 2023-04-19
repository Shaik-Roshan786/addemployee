import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {
  [x: string]: any;


  constructor(private http:HttpClient) { 
    }
  
    
  updateemployee(Firstname: any, data: any) {
    return this.http.put('localhost:3000/employeer/updatedata/' + Firstname,data)
  }
}