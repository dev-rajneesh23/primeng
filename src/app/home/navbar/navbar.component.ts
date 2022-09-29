import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SelectItem, PrimeNGConfig} from 'primeng/api';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() sideToggle = new EventEmitter<boolean>();
  menuStatus:boolean=false;
  sideNavStatus=false;
  checked: boolean=false;

  constructor(private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }
  sideNav()
  {
    this.menuStatus=!this.menuStatus;
    this.sideToggle.emit(this.menuStatus)
  }

}
