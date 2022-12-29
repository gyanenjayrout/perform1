import { Injectable } from '@angular/core';
import{HttpClient} from'@angular/common/http';
import{map} from 'rxjs/operators'
import { RestApiService } from './rest-api service';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  userId: string='';
  password :any= '';
  // setUser(Email: any, Pwd: any) {
  //   throw new Error('Method not implemented.');
  // }
  // login(request: { uId: any; Pwd: any; }) {
  //   throw new Error('Method not implemented.');
  // }
  setUser(uId: string,Pwd: string) {
    this.userId = uId;
    this.password = Pwd
}

getUserDetails() {
    return { userId: this.userId, Password: this.password };
}
  

  constructor(private http :HttpClient,private restapi:RestApiService)
   { }

   postEmploye(data:any)
   {
    return this.http.post<any>("http://localhost:3000/posts",data)
    .pipe(map((res:any)=>
    {
      return res;

    }))
    
   }

   getEmployee()
   {
    return this.http.get<any>("http://localhost:3000/posts")
    .pipe(map((res:any)=>
    {
      return res;

    }))

   }
   updateEmployee(data:any,id:number)
   {
    return this.http.put<any>("http://localhost:3000/posts/"+id,data)
    .pipe(map((res:any)=>
    {
      return res;

    }))

   }
   deleteEmployee(id:number)
   {
    return this.http.delete<any>("http://localhost:3000/posts/"+id)
    .pipe(map((res:any)=>
    {
      return res;

    }))

   }


   signup(requestBody: any){
    return new Promise((resolve,reject)=>{
      this.restapi.post<any>(``,requestBody).subscribe((data: unknown)=>{
        resolve(data);
      },
          (      err: any)=>{
        reject(err)
      });
    })
   }
   login(request: any){
    return new Promise((resolve,reject)=>{
      this.restapi.post<any>(` `,request).subscribe((data: unknown)=>{
        resolve(data);
      },
          (      err: any)=>{
        reject(err)
      });
    })
   }

   

   


}
