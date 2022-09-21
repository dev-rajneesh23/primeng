import { Injectable } from '@angular/core';
import  {Student}   from '../student';
import {AngularFireDatabase,AngularFireList,AngularFireObject} from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  studentsRef!: AngularFireList<any>;
  studentRef!: AngularFireObject<any>;
  constructor(private db: AngularFireDatabase) { }
  AddStudent(student: Student) {
    this.studentsRef.push({
      student_id:student.student_id,
      student_name: student.student_name,
      student_profile: student.student_profile,
      mobile: student.mobile,
      email: student.email,
      address:student.address
    });
  }


  GetStudent(id: string) {
    this.studentRef = this.db.object('students-list/' + id);
    return this.studentRef;
  }
  // Fetch Students List
  GetStudentsList() {
    this.studentsRef = this.db.list('students-list');
    return this.studentsRef;
  }
  // Update Student Object
  UpdateStudent(student: Student) {
    this.studentRef.update({
      student_id:student.student_id,
      student_name: student.student_name,
      student_profile: student.student_profile,
      mobile: student.mobile,
      email: student.email,
      address:student.address
    });
  }
  // Delete Student Object
  DeleteStudent(id: string) {
    this.studentRef = this.db.object('students-list/' + id);
    debugger;

    this.studentRef.remove();
   }
}
