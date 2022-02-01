import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ActivityService } from 'src/app/services/activity.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit, OnDestroy {
  students: any;
  searchText = '';
  subscription: Subscription | undefined;

  constructor(private activity: ActivityService, private  _route: Router ) { }
  

  ngOnInit(): void {
   this.subscription = this.activity.getAllStudents().subscribe((result: any)=>{
      this.students = result;
    })
  }
  getstudentId(_id: any){
    this._route.navigateByUrl(`view-by-id/${_id}`)

  }
  ngOnDestroy(){
    this.subscription?.unsubscribe();
  }
 
}