import { Injectable ,NgZone, OnInit} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import * as auth from 'firebase/auth';
import { User } from './user';
import { AngularFireStorage  } from '@angular/fire/compat/storage';
import { AngularFirestore ,AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit{
 isLoggedin:boolean=false;
 userdata:any=[];
 visibleSidebar1:boolean=false;
 navbar:boolean=false;
  gfg:boolean=true;

 data:any=[];
  user: any;
  constructor(public fireauth:AngularFireAuth , ngzone:NgZone , public router:Router , public firestore:AngularFirestore,private primengConfig: PrimeNGConfig) 
      { 

        this.fireauth.authState.subscribe((user) => {
          if (user) {
            this.userdata.push(user)
           this.user =  localStorage.setItem('user', JSON.stringify(this.userdata));
           
          } else {
            localStorage.setItem('user', 'null');
            JSON.parse(localStorage.getItem('user')!);
          }
        });
        
       
      }


 
  ngOnInit(): void {
    this.fireauth.authState.subscribe((user) => {
      if (user) {
        // this.userdata.push(user);
        this.userdata= user;
        // this.data =  JSON.parse(localStorage.getItem('user')!);
        // this.data.push(user);
        // localStorage.setItem('data', JSON.stringify(this.data));

        localStorage.setItem('user', JSON.stringify(this.userdata));
       
       
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });


    this.primengConfig.ripple = true;
  }

  SignIn(email: string, password: string) {
    return this.fireauth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.SetUserData(result.user);
        this.fireauth.authState.subscribe((user) => {
          if (user) {
            this.router.navigate(['/dashboard']);
          }
        });
      })
      .catch((error) => {
        window.alert(error.message);
      });
      
  }
     
   // Sign up with email/password
   SignUp(email: string, password: string ) {
    return this.fireauth
      .createUserWithEmailAndPassword(email, password  )
      .then((result) => {
        this.SendVerificationMail();
        this.SetUserData(result.user);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  } 

  SendVerificationMail(){
    return this.fireauth.currentUser
    .then((u: any) => u.sendEmailVerification())
    .then(() => {
      this.router.navigate(['verify-email-address']);
    });
  }

  SetUserData(user:any){
    const userref : AngularFirestoreDocument<any> = this.firestore.doc(
      `users/${user.uid}`
    );
    const userdata:User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
  }
  return userref.set(userdata, {
    merge: true,
  });
  }
  // Sign out
  SignOut() {
    return this.fireauth
    .signOut().then(() => {
        setTimeout(function(){
        localStorage.clear();
          window.location.reload();
        },100);
        this.router.navigate(['/']);
    });
  }

  ForgotPassword(passwordResetEmail: string) {
    return this.fireauth
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      })
      .catch((error) => {
        window.alert(error);
      });
    }

    // islogged in 
    get isLoggedIn(): boolean {
      const user = JSON.parse(localStorage.getItem('user')!);
      return user !== null && user.emailVerified !== false ? true : false;
    }

    GoogleAuth() {
      return this.AuthLogin(new auth.GoogleAuthProvider()).then((res: any) => {
        this.router.navigate(['/dashboard']);
        this.visibleSidebar1 = true;
        
      });
  }

    AuthLogin(provider: any) {
      return this.fireauth
        .signInWithPopup(provider)
        .then((result) => {
          this.router.navigate(['/dashboard']);
          this.SetUserData(result.user);
        })
        .catch((error) => {
          window.alert(error);
        });
    }
}

