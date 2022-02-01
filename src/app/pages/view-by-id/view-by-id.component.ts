import { Component, OnInit,OnDestroy} from '@angular/core';
import { ActivityService } from 'src/app/services/activity.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification.service'
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-view-by-id',
  templateUrl: './view-by-id.component.html',
  styleUrls: ['./view-by-id.component.css']
})
export class ViewByIdComponent implements OnInit,OnDestroy {
  student:any;
  details: any;
  body: any;
  isOpen = false;
  showEdit = true;
  faculty: any;
  subscription1: Subscription | undefined;
  subscription2: Subscription | undefined;
  subscription3: Subscription | undefined;
    
 constructor(private activity: ActivityService, private activeRoute: ActivatedRoute, private notifyService : NotificationService, private  _route: Router) { }
 ngOnInit(): void {
    this.activeRoute.params.subscribe((result)=>{
      
      this.details = result['id'];

     this.subscription1 =  this.activity.getStudentId(this.details).subscribe((result: any)=>{
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
    
    this.subscription2 = this.activity.EditStudentId(this.student._id ,this.student).subscribe((result)=>{

      this.notifyService.showSuccess("Student Record Updated!!", "Update Successful");
        this.isOpen = false;
        this.showEdit = true;
      
      }, err=>{
        alert(err.error.msg);
      
    })
  }
  delById(){
    this.subscription3 = this.activity.delStudentById(this.student._id ).subscribe((result: any)=>{
    this.student = result.student;
    this.notifyService.showSuccess("Student Record Deleted!!", "Delete Successful");
    this._route.navigateByUrl('/')
     
    })
  }
  ngOnDestroy(){
    this.subscription1?.unsubscribe();
    this.subscription2?.unsubscribe()
    this.subscription3?.unsubscribe();

  }
  
}