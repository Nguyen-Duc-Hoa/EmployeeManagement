import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServerService {

  private REST_API_SERVER = 'https://localhost:44392'; 
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application.json',
    }),
  }
  constructor(private httpClient: HttpClient) { }

  public getEmployees(CurrentPage : number): Observable<any>{
    const url = `${this.REST_API_SERVER}/api/employees/getall?currentpage=`+CurrentPage;
    return this.httpClient.get<any>(url, this.httpOptions);
  }

  public getPositions(): Observable<any>{
    const url = `${this.REST_API_SERVER}/api/positions`;
    return this.httpClient.get<any>(url, this.httpOptions);
  }

  public getTreeDepartment(): Observable<any>{
    const url = `${this.REST_API_SERVER}/api/departments/gettree`;
    return this.httpClient.get<any>(url, this.httpOptions);
  }

  public getListTitles() : Observable<any>{
    const url = `${this.REST_API_SERVER}/api/titles`;
    return this.httpClient.get<any>(url, this.httpOptions);
  }

}
