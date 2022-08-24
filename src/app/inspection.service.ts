import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InspectionService {

readonly inspectionUrl = "https://localhost:7220/api";

  constructor(private http:HttpClient) { }

  getInspectionList():Observable<any[]>{
    return this.http.get<any>(this.inspectionUrl + '/inspections');
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
}
