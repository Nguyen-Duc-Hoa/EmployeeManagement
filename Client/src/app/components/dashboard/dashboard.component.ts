import { Component, OnInit } from '@angular/core';
import { FilterExpandSettings } from '@progress/kendo-angular-treeview';
import { Observable, of } from 'rxjs';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public filterExpandSettings: FilterExpandSettings = {
    expandMatches: true,
  };
  
    public treeNodes: any[] = [
      {
        id: 1,
        categoryName: "Storage",
        subCategories: [
          { 
            id: 3,
            categoryName: "Wall Shelving" ,
            subCategories: [
              { 
                id: 6,
                categoryName: "Subcate" 
              }
            ]},
          { 
            id: 4,
            categoryName: "Floor Shelving" 
          },
          { 
            id: 5,
            categoryName: "Kids Storage" 
          },
        ],
      },
      {
        id: 2,
        categoryName: "Lights",
        subCategories: [
          { 
            id: 7,
            categoryName: "Ceiling" },
          { 
            id: 8,
            categoryName: "Table" },
          { 
            id: 9,
            categoryName: "Floor" },
        ],
      },
];

public always = () => true;
  constructor() { }

  ngOnInit(): void {
  }

  public fetchChildren(node: any): Observable<any[]> {
    //Return the items collection of the parent node as children.
    return of(node.items);
}

public hasChildren(node: any): boolean {
  //Check if the parent node has children.
  return node.items && node.items.length > 0;
}



}
