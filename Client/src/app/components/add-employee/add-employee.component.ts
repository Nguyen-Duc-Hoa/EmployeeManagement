import { Component, OnInit } from '@angular/core';

interface Item {
  text: string;
  value: number;
}

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  // Using an array of objects as `[data]`
  public listItems: Array<Item> = [
    { text: "Small", value: 1 },
    { text: "Medium", value: 2 },
    { text: "Large", value: 3 },
  ];
  // Trying to assign a primitive value to the DropDownListComponent
  public selectedValue = 2;
  public country = 'first name'
  public value = 1;
  public dataItem: Object = { text: "Furniture", id: 1 };

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

public value1: Object = { text: "Furniture", id: 1 };
  
  public data1: any[] = [
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

  constructor() { }

  public ngOnInit(): void {
    
  }


  public onClose(){}

  public onSubmit(){}
}
