import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UbiquenosService {

  constructor(public http: HttpClient) { }

  getData(){
    // https://reqres.in/api/users?page=0&per_page=12
     var url = "http://104.214.26.142/ApiGetCCB/api/Sede/";
    return this.http.get(url);
  }
}
