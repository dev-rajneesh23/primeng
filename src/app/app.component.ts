import { Component } from '@angular/core';
import { AuthService } from './auth/authservice/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myproject3';
  constructor(public sidebar:AuthService){}
}
