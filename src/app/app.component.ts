import { Component, EventEmitter, Output } from '@angular/core';
declare let $: any;

import { AuthService } from './auth/authservice/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myproject3';
  sideNavStatus=false;

  constructor(public sidebar:AuthService){}
}
