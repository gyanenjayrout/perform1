import { Component ,OnInit} from '@angular/core';
import{Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  signupUsers : any[]=[];
  signUpObj : any = {
    userName:'',
    email : '',
    password : ''

  };
  loginObj : any= 
  {
    userName:'',
    password : ''

  };

  ngOnInit(): void {
    
    
    const localData = localStorage.getItem('signupUsers ');
    if(localData != null)
    {
      this.signupUsers =JSON.parse(localData);
    }

  }
  onSignUp()
  {
    this.signupUsers.push(this.signUpObj);
    localStorage.setItem('signupUsers',JSON.stringify(this.signupUsers));
    this.signUpObj = {
      userName:'',
      email : '',
      password : ''

  };
}
constructor(private router : Router)
{

}


onLogin() 
{
  debugger


 let isUserExit = this.signupUsers.find(m=>m.userName === this.loginObj.userName && m.password === this.loginObj.password);
if(isUserExit != undefined)
{
  alert('user login succefully');
  this.router.navigateByUrl('homepage')

}
else{
  alert('wrong credentials')
}
}









  
}
