import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder ,Validators} from '@angular/forms';
import { StudentService } from '../studentservice/student.service';
import { ActivatedRoute,Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';



@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  editForm!:FormGroup

  constructor(private builder:FormBuilder , private crud:StudentService , private toastr:ToastrService,private router:Router,private actRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.editform_validation();
    const id:any = this.actRoute.snapshot.paramMap.get('id');
    debugger
    this.crud
      .GetStudent(id)
      .valueChanges()
      .subscribe((data) => {
    debugger;

        this.editForm.setValue(data);
      });
   
  }
   editform_validation(){
    this.editForm = this.builder.group({
      student_id:["",[Validators.required]],
      student_name:["",[Validators.required,Validators.maxLength(8)]],
      student_profile:["",[Validators.required,Validators.maxLength(8)]],
      mobile:["",[Validators.required,Validators.maxLength(10)]],
      email:["",[Validators.required,Validators.email]],
      address:["",[Validators.required]]
    }),
    {updateOn:'submit'};
   }

   updateform(){
    this.crud.UpdateStudent(this.editForm.value);
    this.toastr.success(
      this.editForm.controls['student_name'].value + ' updated successfully'
    );
    this.router.navigate(['/studentlist']);
  }

  

}
