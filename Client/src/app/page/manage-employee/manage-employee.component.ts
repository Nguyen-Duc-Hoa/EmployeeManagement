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
  

  public currentPage : any = 1;

  public DepartmentId : any = [0];

  public always = () => true;
  
  constructor(private httpServerService: HttpServerService, 
              private common : CommonService) { 
    this.getListDepartment();
    this.getListPosition();
    this.getListTitles();
    this.getEmployee();
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

  public getEmployee(){
    if(this.DepartmentId[0] == 0)
    {
      this.httpServerService.getEmployees(this.currentPage).subscribe(data=>{
        this.ListEmployee = data;
        console.log('employee :', this.ListEmployee);
      });
    }

    else{
      this.httpServerService.getEmployeeByDepartment(this.currentPage, this.DepartmentId[0]).subscribe(data=>{
        this.ListEmployee = data;
        console.log('new after click :', data);
        console.log('new after click :',  this.DepartmentId[0]);
      });
    }
    
  }

  public clickDepartmentchange(event : any){
    this.DepartmentId = event;
    console.log('department id:', this.DepartmentId);
    console.log('this department change ', event);
    this.getEmployee();
  }

}
