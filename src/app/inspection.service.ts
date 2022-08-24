import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InspectionService {

readonly inspectionUrl = "https://localhost:7220/api";

  constructor(private http:HttpClient) { }

  //inspections
  getInspectionList():Observable<any[]> {
    return this.http.get<any>(this.inspectionUrl + '/Inspections');
  }

  addInspection(data:any){
    return this.http.post(this.inspectionUrl + '/inspections',data);
  }

  updateInspection(id:number|string,data:any){
    return this.http.put(`${this.inspectionUrl}/inspections/${id}`,data)
  }

  deleteInspection(id:number|string){
    return this.http.delete(`${this.inspectionUrl}/inspections/${id}`);
  }


  //inspection types
  getInspectionTypesList():Observable<any[]>{
    return this.http.get<any>(this.inspectionUrl + '/inspectiontypes');
  }

  addInspectionType(data:any){
    return this.http.post(this.inspectionUrl + '/inspectiontypes',data);
  }

  updateInspectionType(id:number|string,data:any){
    return this.http.put(`${this.inspectionUrl}/inspectiontypes/${id}`,data)
  }

  deleteInspectionType(id:number|string){
    return this.http.delete(`${this.inspectionUrl}/inspectiontypes/${id}`);
  }


  //status
  getStatusList():Observable<any[]>{
    return this.http.get<any>(this.inspectionUrl + '/status');
  }

  addStatus(data:any){
    return this.http.post(this.inspectionUrl + '/status',data);
  }

  updateStatus(id:number|string,data:any){
    return this.http.put(`${this.inspectionUrl}/status/${id}`,data)
  }

  deleteStatus(id:number|string){
    return this.http.delete(`${this.inspectionUrl}/status/${id}`);
  }
}
