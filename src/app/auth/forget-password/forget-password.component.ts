import { Component, OnInit } from '@angular/core';
import { AuthService } from '../authservice/auth.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  constructor(public authservice:AuthService) { }

  ngOnInit(): void {
  }

}
