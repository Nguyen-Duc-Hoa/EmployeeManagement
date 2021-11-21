import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonService } from 'src/app/Services/CommonService/common.service';
import { HttpServerService } from 'src/app/Services/http-server.service';

@Component({
  selector: 'app-manage-employee',
  templateUrl: './manage-employee.component.html',
  styleUrls: ['./manage-employee.component.css']
})
export class ManageEmployeeComponent implements OnInit {


  public TreeDepartment : any =[];
  public ListPosition : any = [];
  public ListTitle : any = [];
  public ListEmployee : any = [];

  public DepartmentId : number = 0;

  public always = () => true;
  
  constructor(private httpServerService: HttpServerService, 
              private common : CommonService) { 
    this.getListDepartment();
    this.getListPosition();
    this.getListTitles();
  }


  ngOnInit(): void {

    
  }


  public getListDepartment(){
    this.httpServerService.getTreeDepartment().subscribe(data=>{
      this.TreeDepartment = data;
      this.common.getDepartmentTree()    
    });
  }

  public getListPosition(){
    this.httpServerService.getPositions().subscribe(data=>{
      this.ListPosition = data;
      this.common.getPosition();    
    });
  }

  public getListTitles(){  
    this.httpServerService.getListTitles().subscribe(data=>{
      this.ListTitle = data;
      this.common.getTitle();    
    });
  }

}
