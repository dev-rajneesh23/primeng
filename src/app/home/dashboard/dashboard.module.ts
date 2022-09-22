import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ButtonModule } from 'primeng/button';
import {SidebarModule} from 'primeng/sidebar';
import { FormsModule } from '@angular/forms';
import {TabViewModule} from 'primeng/tabview';
// import { SidebarComponent } from '../sidebar/sidebar.component';
import { ContactComponent } from './pages/contact/contact.component';
import { StudentComponent } from '../pages/student/student.component';



@NgModule({
  declarations: [
    DashboardComponent,
    // SidebarComponent,
    // ContactComponent,
    StudentComponent

  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ButtonModule,
    SidebarModule,
    FormsModule,
    TabViewModule,
    SidebarModule,
    ButtonModule,
  ]
})
export class DashboardModule { }
