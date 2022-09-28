import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/authservice/auth.service';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  // visibleSidebar1:any
  // gfg:boolean=true;


  constructor(public authservice1:AuthService) { }

  ngOnInit(): void {
    // this.primengConfig.ripple = true;
    this.authservice1.visibleSidebar1=true;
  //   var that = this;
  //  setTimeout(function(){
  //    that.authservice1.visibleSidebar1 = true   
  // },5000);
  }

}
