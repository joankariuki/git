import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private username:string;
  private clientid ='5730f5ee0e21b8b8929b';
  private clientsecret ='8568671e56d4addbb9be7ed3240131f5334eb651';
  http: any;

  constructor() {
    console.log('service is now ready!')
    this.username ='joankariuki';
  
   }
   getProfileInfo(){
     return this.http.get("https://api.github.com/users/"+ this.username + "?client_id" + this.clientid + "&client_secret=" + this.clientsecret);
     }
}
function Http(Http: any, Headers: { new(init?: HeadersInit | undefined): Headers; prototype: Headers; }) {
  throw new Error('Function not implemented.');
}

