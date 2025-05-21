import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css']
})
export class AddEditEmpComponent implements OnInit {
 
  constructor(private service:SharedService) { }

  @Input() emp:any;
  EmployeeID: string | undefined;
  FirstName:string | undefined;
  LastName:string | undefined;
  Gender:string | undefined;
  DateOfBirth:string | undefined;
  Address:string | undefined;
  Department:string | undefined;
  BasicSalary:string | undefined;

  DepartmentsList:any[] | undefined;

  ngOnInit(): void {

    this.loadDepartmentList();
    
  }

  loadDepartmentList(){
    this.service.getAllDepartmentNames().subscribe((data:any)=>{
      this.DepartmentsList=data;
    
    this.EmployeeID=this.emp.EmployeeID;
    this.FirstName=this.emp.FirstName;
    this.LastName=this.emp.LastName;
    this.Gender=this.emp.Gender;
    this.DateOfBirth=this.emp.DateOfBirth;
    this.Address=this.emp.Address;
    this.Department=this.emp.Department;
    this.BasicSalary=this.emp.BasicSalary;
  });
}

  addEmployee(){
    var val = {EmployeeID:this.EmployeeID,
      FirstName:this.FirstName,
      LastName:this.LastName,
      Gender:this.Gender,
      DateOfBirth:this.DateOfBirth,
      Address:this.Address,
      Department:this.Department,
      BasicSalary:this.BasicSalary};
    this.service.addEmployee(val).subscribe(res=>{
      alert(res.toString());
    });
  }
  

  updateEmployee(){
    var val = {EmployeeID:this.EmployeeID,
      FirstName:this.FirstName,
      LastName:this.LastName,
      Gender:this.Gender,
      DateOfBirth:this.DateOfBirth,
      Address:this.Address,
      Department:this.Department,
      BasicSalary:this.BasicSalary};
    this.service.updateEmployee(val).subscribe(res=>{
    alert(res.toString());
    });
  }

}
