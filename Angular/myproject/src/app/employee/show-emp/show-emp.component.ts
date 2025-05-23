import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent implements OnInit {
 
 
  constructor(private service:SharedService) {}

  EmployeeList:any=[];

  ModalTitle:string | undefined;
  ActivateAddEditEmpComp:boolean=false;
  emp:any;
  

  ngOnInit(): void {
   this.refreshEmpList();

  }

  addClick(){
   this.emp={
     EmployeeID:0,
     FirstName:"",
     LastName:"",
     Gender:"",
     DateOfBirth:"",
     Address:"",
     Department:"",
     BasicSalary:""
   }
   this.ModalTitle="Add Employee";
   this.ActivateAddEditEmpComp=true;

  }

  editClick(item: any){

   this.emp=item;
   this.ModalTitle="Edit Employee";
   this.ActivateAddEditEmpComp=true;
  }

  deleteClick(dataItem:any){
   if(confirm('Are you sure??')){   
          this.service.deleteEmployee(dataItem.EmployeeID).subscribe(data=>{
           alert(data.toString());
          this.refreshEmpList();
         
         })
   }
 }

  closeClick(){
   this.ActivateAddEditEmpComp=false;
   this.refreshEmpList();
  }

  refreshEmpList(){
   this.service.getEmpList().subscribe(data=>{
      this.EmployeeList=data;
      
   });
  }

}

