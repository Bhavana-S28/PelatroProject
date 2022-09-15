import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user!: User;
  constructor(private http: HttpClient,private userservice: UserService) {
    this.user=new User();
   }

  ngOnInit(): void {
  }
  onSubmit(){
    this.userservice.signUp(this.user).subscribe(u =>{console.log('Successful registration')});
  }
}
