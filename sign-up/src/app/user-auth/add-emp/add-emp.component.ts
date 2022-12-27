import { Component,OnInit } from '@angular/core';
import{FormBuilder,FormGroup}from '@angular/forms';
import { EmployeeModel } from './add-emp.model';
import { ApiService } from 'src/app/Shared/api.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent  implements OnInit{
  formvalue !:FormGroup;
  employeeModelobj : EmployeeModel = new EmployeeModel();
  employeeData ! : any;
  



  constructor(private formbuilder:FormBuilder,private apiService : ApiService,private router : Router)
  {}
  ngOnInit(): void {
    this.formvalue = this.formbuilder.group({
      firstName : [''],
      lastName : [''],
      email : [''],
      mobile : [''],
      salary : ['']
    })

}
postEmployeeDetails()
  {
    this.employeeModelobj.firstName=this.formvalue.value.firstName;
    this.employeeModelobj.lastName=this.formvalue.value.lastName;
    this.employeeModelobj.email=this.formvalue.value.email;
    this.employeeModelobj.mobile=this.formvalue.value.mobile;
    this.employeeModelobj.salary=this.formvalue.value.salary;

    this.apiService.postEmploye(this.employeeModelobj)
    .subscribe(res=>{
      console.log(res);
      alert("employee added succesfully");
      let ref = document.getElementById('cancel')
      ref ?.click();
      this.formvalue.reset();
      
      

    },
    err=>{
      alert("something went wrong");
    })
  }

  getback()
  {
    this.router.navigateByUrl('homepage');

    
  }

   getAllEmployee()
   {
    this.apiService.getEmployee()
    .subscribe(res=>
      {
          this.employeeData = res;
      })
   }

   

}
