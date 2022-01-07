import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivityService } from 'src/app/services/activity.service';
@Component({
  selector: 'app-create-new',
  templateUrl: './create-new.component.html',
  styleUrls: ['./create-new.component.css']
})
export class CreateNewComponent implements OnInit {
  // @Output() closeModal = new EventEmitter<boolean>();
  htmlStr: any;
  constructor( private activity: ActivityService, private formBuilder: FormBuilder,) { }
  studentForm = this.formBuilder.group({
    first_name: '',
    last_name: '',
    faculty: '',
    department: '',
    level: '',
    sex:''
  });


  initForm(){
    
  }
  ngOnInit(): void {
  }
  // close(){
  //   this.closeModal.emit(false)

  // }
  onSubmit(){
    
    this.activity.createNew(this.studentForm.value).subscribe((result)=>{
    
        // this.closeModal.emit(false)
        // console.log(result)
        
        this.htmlStr = 'Student record created';
        this.studentForm.reset();
    
      }, err=>{
        this.htmlStr = "Please make sure your inputs are correct";
      
    })
  }
  
}
