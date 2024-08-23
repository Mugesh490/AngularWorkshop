import { Component, OnInit, Output,Input } from '@angular/core';
import { DataService } from '../../service/data.service';
import { SharedDataService } from 'src/app/service/data/shared-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  records:any[]=[];
  searchTerm:string='';
  role:string='student';

  constructor(private dataservice:DataService , private sharedData:SharedDataService) { }

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
  search=()=>{
    this.sharedData.changeMessage(this.searchTerm);
  }

}
