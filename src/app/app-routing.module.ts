import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import  {VerifyEmailComponent} from './verify-email/verify-email.component'
import {ForgetPasswordComponent} from './auth/forget-password/forget-password.component'
import { AddstudentComponent } from './home/pages/addstudent/addstudent.component';
import  {StudentListComponent}       from  '../app/home/pages/student-list/student-list.component'
import { EditStudentComponent } from './home/pages/edit-student/edit-student.component';
const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"edit/:id",component:EditStudentComponent},
  {path:"studentlist",component:StudentListComponent},
  {path:"verify-email", component:VerifyEmailComponent},
  {path:"forget", component:ForgetPasswordComponent},
   {path:"studentform", component:AddstudentComponent},
  {path:"signup" , loadChildren: () => import('./auth/sign-up/sign-up.module').then(m => m.SignUpModule)},
  {path:"dashboard" , loadChildren: () => import('./home/dashboard/dashboard.module').then(m => m.DashboardModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
