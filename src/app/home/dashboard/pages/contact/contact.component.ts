import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/authservice/auth.service';
 

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(public auth:AuthService) { }

  ngOnInit(): void {
    this.auth.visibleSidebar1=false
  }

}
