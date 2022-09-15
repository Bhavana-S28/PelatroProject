import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  signUp(user: User):Observable<User>{
    const url=`http:192.168.2.159:8080/Reg/addUser`;
    return this.http.post<User>(url,user);
  }
}
