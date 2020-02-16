import { Component, OnInit, Input } from '@angular/core';
import { Registration } from './registration';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  @Input() registration: Registration = new Registration();
  
  constructor() {

   }

  ngOnInit() {
  }

}
