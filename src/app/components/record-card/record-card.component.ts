import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-record-card',
  templateUrl: './record-card.component.html',
  styleUrls: ['./record-card.component.scss']
})
export class RecordCardComponent implements OnInit {

  @Input() searchTerm:string='';
  @Output() delete=new EventEmitter<number>();
  records:any[]=[];
  role:string='';

  constructor(private route:ActivatedRoute,private dataservice:DataService) { }

  ngOnInit(): void {
    this.route.url.subscribe(url=>{
      this.role=url[0].path;
      this.loadRecords();
    });
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

}
