import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isInvalid!: boolean;
  isLogout!: boolean;
  submitted = false;
  model: any = {
      username: '',
      password: '',
      remembered: false
  };


  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){}

}
