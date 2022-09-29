import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { environment } from 'src/environments/environment';
import {AccordionModule} from 'primeng/accordion';
import { LoginModule } from './auth/login/login.module';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AuthService } from './auth/authservice/auth.service';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { ForgetPasswordComponent } from './auth/forget-password/forget-password.component';
import {InputTextModule} from 'primeng/inputtext';
import { SidebarComponent } from './home/sidebar/sidebar.component';
import { BrowserAnimationsModule } 
    from "@angular/platform-browser/animations";
import { SidebarModule } from 'primeng/sidebar';
import { AddstudentComponent } from './home/pages/addstudent/addstudent.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';
import { StudentListComponent } from './home/pages/student-list/student-list.component';
import {TableModule} from 'primeng/table';
import { EditStudentComponent } from './home/pages/edit-student/edit-student.component';
import { LoginComponent } from './auth/login/login.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import {ToggleButtonModule} from 'primeng/togglebutton';




@NgModule({
  declarations: [
    AppComponent,
    VerifyEmailComponent,
    ForgetPasswordComponent,
    SidebarComponent,
    AddstudentComponent,
    StudentListComponent,
    EditStudentComponent,
    NavbarComponent,
    // LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    AccordionModule, 
    LoginModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    InputTextModule,
    BrowserAnimationsModule,
    SidebarModule,
    ButtonModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    NgxPaginationModule,
    TableModule,
    ToggleButtonModule
    
  ],
  
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
