import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder ,Validators} from '@angular/forms';
import { StudentService } from '../studentservice/student.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { AuthService } from 'src/app/auth/authservice/auth.service';


@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {
  studentFrom!:FormGroup
  id:any
  constructor(private fb:FormBuilder,public studentservice:StudentService,private toastr:ToastrService, private router:Router,  private actRoute: ActivatedRoute, private location: Location, public auth:AuthService) { }

  ngOnInit(): void {
    
   this.studentvalidation();
    
    this.studentservice.GetStudentsList();
    // edit form
    this.id = this.actRoute.snapshot.paramMap.get('id');
    console.log(this.id)
    this.studentservice
      .GetStudent(this.id)
      .valueChanges()
      .subscribe((data) => {
      
        this.studentFrom.setValue(data);
        this.router.navigate(['/studentform'])
      });
  }
  studentvalidation(){
    this.studentFrom = this.fb.group({
      student_id:["",[Validators.required]],
      student_name:["",[Validators.required,Validators.maxLength(8)]],
      student_profile:["",[Validators.required,Validators.maxLength(8)]],
      mobile:["",[Validators.required,Validators.maxLength(10)]],
      email:["",[Validators.required,Validators.email]],
      address:["",[Validators.required]]
    }),
    {updateOn:'submit'};
  }

  ResetForm() {
    this.studentFrom.reset();


  }
    submitstudentdata(){
      if(this.studentFrom.valid){
      this.studentservice.AddStudent(this.studentFrom.value);
        this.toastr.success(
          this.studentFrom.controls['student_name'].value + ' successfully added!'
        
        );
        this.router.navigate(['/studentlist'])
        }
        console.log(this.id)

    }
    
}
