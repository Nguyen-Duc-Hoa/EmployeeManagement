import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-button-add',
  templateUrl: './button-add.component.html',
  styleUrls: ['./button-add.component.css']
})
export class ButtonAddComponent implements OnInit, OnChanges {
  
  @Input() departments: any[] = [
    {
      DepartmentId: 2,
      Name: "Tổng giám đốc",
      FaDeparment: null,
      Departments: []
  },
  {
      DepartmentId: 3,
      Name: "Ban quản lý",
      FaDeparment: null,
      Departments: []
  },
  ];
  // Using an array of objects as `[data]`
  @Input() listPostions: any =[
    { PositionId: 1, Name: "vị trí 1"},
    { PositionId: 2, Name: "vị trí 2"},
    { PositionId: 3, Name: "vị trí 3"},
  ];

  @Input() listTitles: any = [
    {TitleId: 1, Name: "Chức danh 1"}
  ];
  // Trying to assign a primitive value to the DropDownListComponent

  public selectedPosition : any = this.listPostions[0];
  public selectedTitle : any = this.listTitles[0];
  public selectedDepartment : any = this.departments[0];
  
  public Id : string = '';
  public Firstname : string ='';
  public Lastname : string ='';
  public opened = false;


  constructor(form: FormBuilder) { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('add employee onChange');
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
