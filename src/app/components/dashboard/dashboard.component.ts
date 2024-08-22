import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  records:any[]=[];
  searchTerm:string='';
  role:string='student';

  constructor(private dataservice:DataService) { }

  ngOnInit(): void {
    this.loadRecords();
  }

  loadRecords(){
    this.dataservice.getRecords(this.role).subscribe(data=>{
      this.records=data;
    });
  }

  showStudents(){
    this.role='student';
    this.loadRecords();
  }

  showTeachers(){
    this.role='teacher';
    this.loadRecords();
  }

  deleteRecord(id:number){
    this.dataservice.deleteRecord(this.role,id).subscribe(()=>{
      this.loadRecords();
    });
  }

}
