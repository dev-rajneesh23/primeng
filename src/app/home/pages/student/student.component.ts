import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/authservice/auth.service';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(public authservice:AuthService) { }

  ngOnInit(): void {
    this.authservice.visibleSidebar1=true;
  }

}
