import { Component, OnInit, Input } from '@angular/core';
import { Login } from './login';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() login : Login = new Login();
  constructor() { }

  ngOnInit() {
  }

}
