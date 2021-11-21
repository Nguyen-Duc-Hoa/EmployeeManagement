import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

interface Item {
  text: string;
  value: number;
}

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit, OnChanges{

  public data: any[] = [
    {
      text: "Furniture",
      id: 1,
      items: [
        { text: "Tables & Chairs", id: 2 },
        { text: "Sofas", id: 3 },
        { text: "Occasional Furniture", id: 4 },
      ],
    },
    {
      text: "Decor",
      id: 5,
      items: [
        { text: "Bed Linen", id: 6 },
        { text: "Carpets", id: 7 },
      ],
    },
  ];

public value1: any = { department: "Furniture", id: 1 };
  
  public departments: any[] = [
    {
      department: "Furniture",
      id: 1,
      items: [
        { department: "Tables & Chairs", id: 2 },
        { department: "Sofas", id: 3 },
        { department: "Occasional Furniture", id: 4 },
      ],
    },
    {
      department: "Decor",
      id: 5,
      items: [
        { department: "Bed Linen", id: 6 },
        { department: "Carpets", id: 7 },
      ],
    },
  ];
  // Using an array of objects as `[data]`

  public postions: any =[
    { Id: 1, Name:'Nhân sự' },
    { Id: 2, Name:'Quản lí' },
    { Id: 3, Name:'Tính lương' },
  ]
  public listItems: Array<Item> = [
    { text: "Small", value: 1 },
    { text: "Medium", value: 2 },
    { text: "Large", value: 3 },
  ];
  // Trying to assign a primitive value to the DropDownListComponent

  public selectedPosition : any = { Id: 1 };
  public selectedTitle : any = { value: 1 };
  public selectedDepartment : any = { id: 1 };
  
  public Id : any;
  public Firstname : any;
  public Lastname : any;

  @Input()
  public opened = true;
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges');
    console.log(JSON.stringify(changes));
  }

  ngOnInit(): void {
  }

  public openDialogUpdate(){
    this.opened = true;
    console.log('update');
    this.ngOnInit();
  }

  public close( event : any)
  {
    if(event == 'yes')
    {
      console.log('yes')
    }
    this.opened = false;
  }

}
