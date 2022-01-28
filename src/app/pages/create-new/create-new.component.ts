import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { ActivityService } from 'src/app/services/activity.service';
import { NotificationService } from 'src/app/services/notification.service'
@Component({
  selector: 'app-create-new',
  templateUrl: './create-new.component.html',
  styleUrls: ['./create-new.component.css']
})
export class CreateNewComponent implements OnInit {
  studentForm: FormGroup | any;
  isSubmitted = false;
  constructor( private activity: ActivityService, private formBuilder: FormBuilder, private notifyService : NotificationService) { }

  ngOnInit()
  {
    this.studentForm = this.formBuilder.group({
      first_name: ['', [Validators.required, Validators.minLength(3)]],
      last_name: ['', [Validators.required, Validators.minLength(3)]],
      faculty: ['', [Validators.required, Validators.minLength(3)]],
      department: ['', [Validators.required, Validators.minLength(3)]],
      level: ['', Validators.required],
      sex: ['', Validators.required]
    });
  }
  get errorControl() {
    return this.studentForm.controls;
  }
  onSubmit(){
    this.isSubmitted = true;
    if(!this.studentForm.valid){
      return false;
    } 
    else{
       this.activity.createNew(this.studentForm.value).subscribe((result)=>{
        this.notifyService.showSuccess("Student record created successfully!!", "Creation Successful")
        this.studentForm.reset();
      })
       return true;
    }
   
  }
  
}
