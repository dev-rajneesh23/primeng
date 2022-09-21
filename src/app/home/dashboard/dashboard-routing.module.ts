import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from '../pages/student/student.component';
import { DashboardComponent } from './dashboard.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [

  {path:"", component:DashboardComponent},
  {path:"contact",component:ContactComponent},
  {path:"student",component:StudentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
