import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-record-card',
  templateUrl: './record-card.component.html',
  styleUrls: ['./record-card.component.scss']
})
export class RecordCardComponent implements OnInit {

  @Input() records:any[]=[];
  @Input() searchTerm:string='';
  @Output() delete=new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

}
