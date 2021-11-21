import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EmployeeServiceService } from 'src/app/Services/EmployeeServices/employee-service.service';
import { HttpServerService } from 'src/app/Services/http-server.service';

@Component({
  selector: 'app-button-add',
  templateUrl: './button-add.component.html',
  styleUrls: ['./button-add.component.css']
})
export class ButtonAddComponent implements OnInit, OnChanges {
  
  @Input() departments: any[] = [];
  @Input() listPostions: any =[];
  @Input() listTitles: any = [];
  // Trying to assign a primitive value to the DropDownListComponent

  public selectedPosition : any = this.listPostions[0];
  public selectedTitle : any = this.listTitles[0];
  public selectedDepartment : any = this.departments[0];
  
  public Id : string = '';
  public Firstname : string ='';
  public Lastname : string ='';
  public opened = false;

  public employeeForm : any = [];


  constructor(private httpServerService: HttpServerService, private employeeService : EmployeeServiceService) { 
  }
  
  public ngOnChanges(changes: SimpleChanges): void {
    this.selectedPosition = this.listPostions[0];
    this.selectedTitle = this.listTitles[0];
    this.selectedDepartment = this.departments[0];
    this.employeeForm = this.employeeService.employee1;
  }

  public ngOnInit(): void {
  }

  public close(status : any) {
    console.log(`Dialog result: ${status}`);
    if(status == 'yes'){
      console.log(`ID:`, this.Id);
      console.log(`username:`, this.Firstname +' '+ this.Lastname);
      console.log('position', this.selectedPosition.PositionId);
      console.log('title', this.selectedTitle.TitleId);
      console.log('Department', this.selectedDepartment.DepartmentId);

      this.employeeForm.Id = this.Id;
      this.employeeForm.Avatar = null;
      this.employeeForm.FirstName = this.Firstname;
      this.employeeForm.LastName = this.Lastname;
      this.employeeForm.PositionId = this.selectedPosition.PositionId;
      this.employeeForm.TitleId = this.selectedTitle.TitleId;
      this.employeeForm.DepartmentId = this.selectedDepartment.DepartmentId

      console.log(this.employeeForm);

      this.httpServerService.postAddEmployee(this.employeeForm).subscribe(data =>{
        console.log('insert', data);
      })
      this.httpServerService.putEditEmployee(this.employeeForm).subscribe(data =>{
        console.log('Put', data);
      })
    }
  
    this.reset();
    this.opened = false;
  }

  public open() {
    this.opened = true;
  }

  public reset(){
    this.Firstname = '';
    this.Lastname = '';
    this.Id = '';
  }


}
