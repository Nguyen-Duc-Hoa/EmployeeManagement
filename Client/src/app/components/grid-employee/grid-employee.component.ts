import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { EmployeeServiceService } from 'src/app/Services/EmployeeServices/employee-service.service';
import { HttpServerService } from 'src/app/Services/http-server.service';
import { UpdateEmployeeComponent } from '../update-employee/update-employee.component';

@Component({
  selector: 'app-grid-employee',
  templateUrl: './grid-employee.component.html',
  styleUrls: ['./grid-employee.component.css']
})
export class GridEmployeeComponent implements OnInit, OnChanges {
  
  @Input() departments: any = [];
  @Input() listPostions: any =[];
  @Input() listTitles: any = [];
  @Input() listEmployee : any = [];
  // Trying to assign a primitive value to the DropDownListComponent

  public selectedPosition : any = [];
  public selectedTitle : any = [];
  public selectedDepartment : any = [];

  
  //data danh sách nhân viên
  public DataEmployee : any = [];
  public totalEmployee : number = 0 ;
  public currentPage = this.listEmployee.CurrentPage;

  
  public Id : any;
  public Firstname : any;
  public Lastname : any;
  public opened = false;
  public gridView : GridDataResult;
  public skip = 0;
  public pagesize = 5;

  public gridData: any[] = []
  public currentEmployee : any = []
  public DepartmentId = 0;
      

  constructor(private httpServerService: HttpServerService,
              private employeeService: EmployeeServiceService) {
    this.totalEmployee = this.listEmployee.TotalItem;
    this.DataEmployee = this.listEmployee.items;

    this.gridView ={ data: this.DataEmployee, total: this.totalEmployee};
  }


  public ngOnChanges(changes: SimpleChanges): void {
    this.totalEmployee = this.listEmployee.TotalItem;
    this.DataEmployee = this.listEmployee.items;
    this.gridView ={ data: this.DataEmployee, total: this.totalEmployee};
    console.log('onChange')
  }

  public ngOnInit(): void {

  }

  public doubleclick(){
    console.log('click');
  }


  public dblClickEvent(event : any) {
    this.choosedEmployee(event.path[1].rowIndex);
    console.log('current :',this.currentEmployee);
    this.opened = true;
  }

  public close(event : any){
    if(event == 'yes'){
      console.log('yes');
    }

    this.opened = false;
  }

  public pageChange(event : any){
    this.skip = event.skip;
    this.currentPage = this.skip/ this.pagesize + 1;
    console.log('page change', this.currentPage); 

    if(this.DepartmentId == 0)
    {
      this.httpServerService.getEmployees(this.currentPage).subscribe(data=>{
        this.listEmployee = data;
        console.log('employee :', this.listEmployee);
        this.DataEmployee = this.listEmployee.items;
        console.log('Data employee ',this.DataEmployee); 
        this.gridView ={ data: this.DataEmployee , total: this.totalEmployee,}
      });
    }
    
  }


  public choosedEmployee( index : number){
    this.currentEmployee = this.DataEmployee[index];
    
    this.Id = this.currentEmployee.Id;
    this.Firstname = this.currentEmployee.FirstName;
    this.Lastname = this.currentEmployee.LastName;


    for(let i = 0; i < this.listPostions.length; i++){
      if(this.listPostions[i].Name == this.currentEmployee.Department){
        this.selectedDepartment = this.departments[i];
        console.log('this selectedDepartment :', this.selectedDepartment);
      }
    }
    this.selectedDepartment = {Name: "Bộ phận tính lương"}

    for(let i = 0; i < this.listPostions.length; i++){
      if(this.listPostions[i].Name == this.currentEmployee.Position){

        this.selectedPosition = this.listPostions[i];
      }
    }

    for(let i = 0; i < this.listTitles.length; i++){
      if(this.listTitles[i].Name == this.currentEmployee.Title){
        this.selectedTitle = this.listTitles[i];
      }
    }



  }

}
