import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Department } from '../common/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentServiceService {

  depurl="http://localhost:8080/api/department"
  constructor(private httpClient : HttpClient) { }
  getAllDepartment() : Observable<Department[]>{
    console.log( this.httpClient.get<getDepartmentResponse>(this.depurl).pipe(map(response => response._embedded.departments)))
    return this.httpClient.get<getDepartmentResponse>(this.depurl).pipe(map(response => response._embedded.departments))
  }
}

interface getDepartmentResponse {
  _embedded : {
    departments : Department[]
  }
}
