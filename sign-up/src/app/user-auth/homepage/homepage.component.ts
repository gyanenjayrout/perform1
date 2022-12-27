import { Component ,OnInit} from '@angular/core';
import{FormBuilder,FormGroup}from '@angular/forms'
import { EmployeeModel } from './homepage.model';
import { ApiService } from 'src/app/Shared/api.service';
import { Router } from '@angular/router';





@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

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

    this.getAllEmployee();
      
  }
  clickAddEmployee()
  {
    this.formvalue.reset();
    

    this.router.navigateByUrl('add-emp');


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
      this.getAllEmployee();
    },
    err=>{
      alert("something went wrong");
    })
  }

   getAllEmployee()
   {
    this.apiService.getEmployee()
    .subscribe(res=>
      {
          this.employeeData = res;
      })
   }

   deleteEmployee(row:any)
   {
    this.apiService.deleteEmployee(row.id)
    .subscribe(res=>
      {
        alert("Employee Deleted");
        this.getAllEmployee();
      })
   }

   onEdit(row:any)
   {
  


    this.employeeModelobj.id = row.id;
    this.formvalue.controls['firstName'].setValue(row.firstName);
    this.formvalue.controls['lastName'].setValue(row.lastName);
    this.formvalue.controls['email'].setValue(row.email);
    this.formvalue.controls['mobile'].setValue(row.mobile);
    this.formvalue.controls['salary'].setValue(row.salary);
    




   }

   updateEmployeeDetails()
   {
    this.employeeModelobj.firstName=this.formvalue.value.firstName;
    this.employeeModelobj.lastName=this.formvalue.value.lastName;
    this.employeeModelobj.email=this.formvalue.value.email;
    this.employeeModelobj.mobile=this.formvalue.value.mobile;
    this.employeeModelobj.salary=this.formvalue.value.salary;

    this.apiService.updateEmployee(this.employeeModelobj,this.employeeModelobj.id)
    .subscribe(res=>
      {
        alert("updated succesfully")
        let ref = document.getElementById('cancel')
      ref ?.click();
      this.formvalue.reset();
      this.getAllEmployee();
      
      })
   }

   
}


