import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl ,Validators} from '@angular/forms';
import { Password } from 'primeng/password';
import { __values } from 'tslib';
import  {AuthService}  from '../authservice/auth.service' ;
 import  {Router}   from  '@angular/router'
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
   signupForm!:FormGroup;
   issignin=false;
   data:any;
   signupdata:any;
  constructor(private fb:FormBuilder , public auth:AuthService, private router:Router) { }
  
  
  

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      username:['',Validators.required],
      email:['', [Validators.required,Validators.email]],
      password:['', [Validators.required, Validators.maxLength(6)]],
      confirm_password:['', [Validators.required, Validators.maxLength(6)]]
    }),
    {updateOn:'submit'}
    this.auth.isLoggedin=true;

  }
  signup(){

    if(this.signupForm.valid)
    {
      this.data = this.signupForm.value;
      this.auth.SignUp(this.data.email,this.data.password )
     this.router.navigate(['/verify-email']);
    }
    else{

    };   
  }
   
}
