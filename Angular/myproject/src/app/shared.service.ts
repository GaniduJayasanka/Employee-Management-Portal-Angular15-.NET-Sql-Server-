import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl="http://localhost:65392/api";

  constructor(private http:HttpClient) { }

  getDepList():Observable<any[]>{
     return this.http.get<any>(this.APIUrl+'/Department');
  }   

  addDepartment(val:any){
    return this.http.post(this.APIUrl+'/Department',val);
  }

  updateDepartment(val:any){
    return this.http.put(this.APIUrl+'/Department',val);
  }

  deleteDepartment(val:any){
    return this.http.delete(this.APIUrl+'/Department/'+ val);
  }


  getEmpList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Employee');
 }   

 addEmployee(val:any){
   return this.http.post(this.APIUrl+'/Employee',val);
 }

 updateEmployee(val:any){
   return this.http.put(this.APIUrl+'/Employee',val);
 }

 deleteEmployee(id:any){
   return this.http.delete(this.APIUrl+'/Employee/'+id);
 }

 getAllDepartmentNames():Observable<any[]>{
  return this.http.get<any[]>(this.APIUrl+'/Employee/GetAllDepartmentNames');
 }

}
