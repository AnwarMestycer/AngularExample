import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
login !: string;

  constructor() { }

  ngOnInit(): void {
  }

  storage(){
    localStorage.setItem('user', this.login);
    console.log(localStorage.getItem('user'));
  }

}
