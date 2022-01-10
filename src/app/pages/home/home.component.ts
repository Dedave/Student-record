import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivityService } from 'src/app/services/activity.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  students: any;
  searchText = '';
  constructor(private activity: ActivityService, private  _route: Router ) { }

  ngOnInit(): void {
    this.activity.getAllStudents().subscribe((result: any)=>{
      this.students = result;
    })
  }
  getstudentId(_id: any){
    this._route.navigateByUrl(`view-by-id/${_id}`)

  }
 
}