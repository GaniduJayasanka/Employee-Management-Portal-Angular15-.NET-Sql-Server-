import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.css']
})
export class ShowDepComponent implements OnInit {

         constructor(private service:SharedService) { }

         DepartmentList:any=[];

         ModalTitle:string="";
         ActivateAddEditDepComp:boolean=false;
         dep:any;
         

         DepartmentIDFilter:string="";
         DepartmentNameFilter:string="";
         DepartmentListWithoutFilter:any=[];

         ngOnInit(): void {
          this.refreshDepList();
    
         }

         addClick(){
          this.dep={
            DepartmentID:0,
            DepartmentName:""
          }
          this.ModalTitle="Add Department";
          this.ActivateAddEditDepComp=true;

         }

         editClick(item:any){
          this.dep=item;
          this.ModalTitle="Edit Department";
          this.ActivateAddEditDepComp=true;
        }

        deleteDepartment(item:any){
            this.service.deleteDepartment(item.DepartmentID).subscribe(data=>{
              alert(data.toString());     
              this.refreshDepList();
             });
          }
        

         closeClick(){
          this.ActivateAddEditDepComp=false;
          this.refreshDepList();
         }

         refreshDepList(){
          this.service.getDepList().subscribe(data=>{
             this.DepartmentList=data;
             this.DepartmentListWithoutFilter=data;
          });
         }

         FilterFn(){
          var DepartmentIDFilter = this.DepartmentIDFilter;
          var DepartmentNameFilter = this.DepartmentNameFilter;
      
          this.DepartmentList = this.DepartmentListWithoutFilter.filter(function (el: { DepartmentID: { toString: () => string; }; DepartmentName: { toString: () => string; }; }){
              return el.DepartmentID.toString().toLowerCase().includes(
                DepartmentIDFilter.toString().trim().toLowerCase()
              )&&
              el.DepartmentName.toString().toLowerCase().includes(
                DepartmentNameFilter.toString().trim().toLowerCase()
              )
          });
         }

         sortResult(prop: string | number , asc: any){
          this.DepartmentList = this.DepartmentListWithoutFilter.sort(function(a: { [x: string]: number; },b: { [x: string]: number; }){
            if(asc){
                return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
            }else{
              return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
            }
          })
        }
}
