import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { InspectionService } from 'src/app/inspection.service';

@Component({
  selector: 'app-show-inspection',
  templateUrl: './show-inspection.component.html',
  styleUrls: ['./show-inspection.component.css']
})
export class ShowInspectionComponent implements OnInit {

  inspectionList$!:Observable<any[]>;
  inspectionTypesList$!:Observable<any[]>;
  inspectionTypesList:any =[];


  //map to display data associate with foreigh keys
  inspectionTypesMap:Map<number,string> = new Map();

  constructor(private service:InspectionService) { }

  ngOnInit(): void {
    this.inspectionList$ = this.service.getInspectionList();
  }

}
