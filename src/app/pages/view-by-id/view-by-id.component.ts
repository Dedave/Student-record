import { Component, OnInit } from '@angular/core';
import { ActivityService } from 'src/app/services/activity.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-view-by-id',
  templateUrl: './view-by-id.component.html',
  styleUrls: ['./view-by-id.component.css']
})
export class ViewByIdComponent implements OnInit {
  student:any;
  oppp: any;
  body: any;
  isOpen = false;
  showEdit = true;
  faculty: any;
 
  constructor(private activity: ActivityService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((result)=>{
      //debugger;
      
      this.oppp = result['abc'];

      this.activity.getStudentId(this.oppp).subscribe((result: any)=>{
        console.log(result)
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
      if(result=='success'){
        this.isOpen = false;
      }
      }, err=>{
        alert(err.error.msg);
      
    })
  }
  delById(){
    this.activity.delStudentById(this.student._id ).subscribe((result: any)=>{
      this.student = result.student;
      this.isOpen =false;
      ;
    
    })
  }
  
}