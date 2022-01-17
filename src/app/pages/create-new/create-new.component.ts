import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivityService } from 'src/app/services/activity.service';
import { NotificationService } from 'src/app/services/notification.service'
@Component({
  selector: 'app-create-new',
  templateUrl: './create-new.component.html',
  styleUrls: ['./create-new.component.css']
})
export class CreateNewComponent implements OnInit {
  // @Output() closeModal = new EventEmitter<boolean>();
  htmlStr: any;
  constructor( private activity: ActivityService, private formBuilder: FormBuilder, private notifyService : NotificationService) { }
  studentForm = this.formBuilder.group({
    first_name:['', Validators.required],
    last_name: ['', Validators.required],
    faculty:['', Validators.required],
    department:['', Validators.required],
    level: ['', Validators.required],
    sex:['', Validators.required]  
  });


  initForm(){
    
  }
  ngOnInit(): void {
  }
  onSubmit(){
    
    this.activity.createNew(this.studentForm.value).subscribe((result)=>{
        this.notifyService.showSuccess("Student record created successfully!!", "Creation Successful")
        this.studentForm.reset();
    
      }, err=>{
        alert("Please make sure your inputs are correct");
      
    })
  }
  
}
