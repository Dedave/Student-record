import { Component, OnInit } from '@angular/core';
import { ActivityService } from 'src/app/services/activity.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification.service'
@Component({
  selector: 'app-view-by-id',
  templateUrl: './view-by-id.component.html',
  styleUrls: ['./view-by-id.component.css']
})
export class ViewByIdComponent implements OnInit {
  student:any;
  details: any;
  body: any;
  isOpen = false;
  showEdit = true;
  faculty: any;
    
 constructor(private activity: ActivityService, private activeRoute: ActivatedRoute, private notifyService : NotificationService, private  _route: Router) { }
 ngOnInit(): void {
    this.activeRoute.params.subscribe((result)=>{
      
      this.details = result['id'];

      this.activity.getStudentId(this.details).subscribe((result: any)=>{
        this.student = result;
        this.faculty=this.student.faculty
        
      }
    )
    })
  }
  ClickEdit(){
    this.isOpen = true;
    this.showEdit = false;
  }
  EditStudent(){
    // const body = {
    // first_name: '',
    // last_name: '',
    // faculty: '',
    // department:'',
    // level: '',
    // sex:''
    //   }
    
    this.activity.EditStudentId(this.student._id ,this.student).subscribe((result)=>{

      this.notifyService.showSuccess("Student Record Updated!!", "Update Successful")
        this.isOpen = false;
        this.showEdit = true;
      
      }, err=>{
        alert(err.error.msg);
      
    })
  }
  delById(){
    this.activity.delStudentById(this.student._id ).subscribe((result: any)=>{
    this.student = result.student;
    this.notifyService.showSuccess("Student Record Deleted!!", "Delete Successful")
    //this._route.navigateByUrl('/create-new')
     
    })
  }
  
}