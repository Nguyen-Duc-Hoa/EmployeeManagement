import { Injectable } from '@angular/core';
import { HttpServerService } from '../http-server.service';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public DepartmentTree : any = [];
  public position$ : any = [];
  public titles$ : any = [];
  
  constructor(private httpServerService: HttpServerService) {
    
  }

  public OnChange(){
    this.getDepartmentTree();
    this.getPosition();
    this.getTitle();
    console.log('add common data');
  }
  
  public getDepartmentTree(){
    this.httpServerService.getTreeDepartment().subscribe(data=>{
      this.DepartmentTree = data;

    })
    
  }

  public getPosition(){
    this.httpServerService.getPositions().subscribe(data=>{
      this.position$ = data;
      console.log('common :', this.position$)
    })
  }

  public getTitle(){
    this.httpServerService.getListTitles().subscribe(data=>{
      this.titles$ = data;
    })
  }
}
