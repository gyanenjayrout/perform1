import { Component ,OnInit} from '@angular/core';
import{Router} from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/Shared/api.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  

  
  
  LoginForm: any;
  signUpForm ! :FormGroup;
  userdata: any;
  LoginMessage: boolean = true;
  

  // ngOnInit(): void {
    
    
  //   const localData = localStorage.getItem('signupUsers ');
  //   if(localData != null)
  //   {
  //     this.signupUsers =JSON.parse(localData);
  //   }

  // }


  constructor(private fb:FormBuilder,private router : Router, private LoginServices: ApiService){}
  ngOnInit() {
   
    this.signUpForm = this.fb.group({
      UserEmail: ['', Validators.required],
      Userpwsd: ['', Validators.required],
      userId : ['',Validators.required]
      
    })


    this.LoginForm = this.fb.group({
      userId: ['',Validators.required],
      userpwsd: ['',Validators.required]

    })


    
}
onSignUp()
    {
      console.log('enter')
      const requestBody = {
        uname: this.signUpForm.value.userId,
        uemail: this.signUpForm.value.UserEmail,
        upswd : this.signUpForm.value.Userpwsd

      };
      this.LoginServices.signup(requestBody).then(
        (data:any)=>
        {
          console.log(data.data,'ddddddddddd')
          if(data.data[0].OutResponseMessage == "Email already exists.") {
            alert('you have already SignedUp')
          }
          else if(data.data[0].OutResponseMessage == "User Created Successfully."){
            alert('SignUp Successfully');
            

          }
          console.log('requestBody', requestBody) 
        });
    }
    



onLogin(uId = this.LoginForm.value.UserId, Pwd = this.LoginForm.value.Userpwsd) 
{
  debugger

  const request ={
    uId : this.LoginForm.value.UserEmail,
    Pwd : this.LoginForm.value.Userpwsd
  }

  this.LoginServices.login(request).then(
    (data:any)=>{
      this.userdata=data.data;
      this.userdata = data.data;
       if (data.data[0].Ivmsg == "NotRegistered") {
       alert('you have to SignUp first')
    }
    else{
      this.LoginServices.setUser(uId,Pwd)
         this.router.navigate(['/homepage'])

    }
  }
  );


//  let isUserExit = this.signupUsers.find(m=>m.userName === this.loginObj.userName && m.password === this.loginObj.password);
// if(isUserExit != undefined)
// {
//   alert('user login succefully');
//   this.router.navigateByUrl('homepage')

// }
// else{
//   alert('wrong credentials')
// }



}









  
}




