import { Component, OnInit } from '@angular/core';
import { StudentService } from '../studentservice/student.service';
import { ToastrService } from 'ngx-toastr';
import  {Student}   from '../student'


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  // student:any=[];
  p: number = 1;
  Student!: Student[];
  hideWhenNoStudent: boolean = false;
  noData: boolean = false;
  preLoader: boolean = true;
  
  constructor(
    public crudApi: StudentService,
    public toastr: ToastrService
    ){ }

  ngOnInit() {
    this.dataState();
    let s = this.crudApi.GetStudentsList(); 
     s.snapshotChanges().subscribe(data => {
       this.Student = [];
       console.log(data)
      data.forEach(item => {
        let a:any = item.payload.toJSON(); 
        a['$key'] = item.key;

        this.Student.push(a as Student);
      })
    })
  }
  dataState() {     
    this.crudApi.GetStudentsList().valueChanges().subscribe(data => {
      this.preLoader = false;
      if(data.length <= 0){
        this.hideWhenNoStudent = false;
        this.noData = true;
      } else {
        this.hideWhenNoStudent = true;
        this.noData = false;
      }
    })
  }
  deletestudent(student:any) {
    if (window.confirm('Are sure you want to delete this student ?')) { 
      this.crudApi.DeleteStudent(student.$key)
      this.toastr.success(student.student_name + ' successfully deleted!');
    }
  }

}