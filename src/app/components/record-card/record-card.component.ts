import { Component, OnInit,Input,Output,EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { DataService } from '../../service/data.service';
import { ActivatedRoute } from '@angular/router';
import { SharedDataService } from 'src/app/service/data/shared-data.service';

@Component({
  selector: 'app-record-card',
  templateUrl: './record-card.component.html',
  styleUrls: ['./record-card.component.scss']
})
export class RecordCardComponent implements OnInit {

  searchTerm:string='';
  @Output() delete=new EventEmitter<number>();
  @Input() records:any[]=[];
  role:string='';

  constructor(private route:ActivatedRoute,private dataservice:DataService, private sharedData:SharedDataService) { }

  ngOnInit(): void {
    this.route.url.subscribe(url=>{
      this.role=url[0].path;
      this.loadRecords();
    });
    this.sharedData.message.subscribe((message)=>this.searchTerm=message);
    console.log(this.searchTerm);
  }

  loadRecords(){
    this.dataservice.getRecords(this.role).subscribe(data=>{
      this.records=data;
    });
  }

  deleteRecord(id:number){
    this.dataservice.deleteRecord(this.role,id).subscribe(()=>{
      this.loadRecords();
    });
  }
  OnChanges(changes:SimpleChanges){
    console.log(this.searchTerm);
  }
}
