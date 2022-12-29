import { Injectable } from '@angular/core';
import { RestApiService } from './rest-api service';
import { HttpClient, HttpHeaders } from '@angular/common/http';




@Injectable({
    providedIn: 'root'
})
// tslint:disable-next-line: class-name
export class loginServices {


    constructor(private restapi: RestApiService, private httpClient: HttpClient) {
    }

    // userName = 'xxxx';
    
    // setUser(name: string) {
    //     this.userName = name;
    // }

    // getUserDetails() {
    //     return { name: this.userName };
    // }


    // setUser(name: string) {
    //     this.userName = name;
    // }

    // getUserDetails() {
    //     return { name: this.userName };
    // }





// signup(requestBody: any){
//     return new Promise((resolve,reject)=>{
//       this.restapi.post<any>(``,requestBody).subscribe((data: unknown)=>{
//         resolve(data);
//       },
//           (      err: any)=>{
//         reject(err)
//       });
//     })
//    }
//    login(request: any){
//     return new Promise((resolve,reject)=>{
//       this.restapi.post<any>(``,request).subscribe((data: unknown)=>{
//         resolve(data);
//       },
//           (      err: any)=>{
//         reject(err)
//       });
//     })
//    }
}
