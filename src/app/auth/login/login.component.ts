import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder , FormControl, Validators} from '@angular/forms';
import { AuthService } from '../authservice/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginFrom!:FormGroup;
  userdata:any;
  
  constructor(private fb:FormBuilder,public authservice:AuthService ) { }

  ngOnInit(): void {
   this.loginFrom = this.fb.group({
    email:["", [Validators.required, Validators.email]],
    password:["", [Validators.required, Validators.minLength(6)]]
   }),
   {updateOn:'submit'}
   this.userdata = this.loginFrom;
   this.authservice.visibleSidebar1 =false;
   this.authservice.isLoggedin=false;
   this.authservice.navbar =false;

  }
    // onsubmit(){
    //   debugger
    //   this.userdata = this.loginFrom.value;
    //   this.authservice.SignUp(this.userdata.email,this.userdata.password)
    // }
}
