import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { DataService } from '../../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-teacher-form',
  templateUrl: './student-teacher-form.component.html',
  styleUrls: ['./student-teacher-form.component.scss']
})
export class StudentTeacherFormComponent implements OnInit {

  form:FormGroup;
  constructor(private fb:FormBuilder,private dataservice:DataService, private router:Router) { 
    this.form=this.fb.group({
      name:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      role:['',Validators.required],
      address:['',Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(){
    if(this.form.valid){
      this.dataservice.addRecord(this.form.value).subscribe();
      this.router.navigate(['/dashboard']);
    }

  }

}
