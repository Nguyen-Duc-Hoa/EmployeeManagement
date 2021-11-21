import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FilterExpandSettings } from '@progress/kendo-angular-treeview';
import { Observable, of } from 'rxjs';
import { CommonService } from 'src/app/Services/CommonService/common.service';
import { HttpServerService } from 'src/app/Services/http-server.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnChanges {


  public filterExpandSettings: FilterExpandSettings = {
    expandMatches: true,
  };

  public selectedDepart : any = [];
  public selectedKeys: any[] = ["0_2"];
    public treeNodes: any[] = [{
      "DepartmentId": 2,
      "Name": "Tổng giám đốc",
      "FaDeparment": null,
      "Departments": []
  },
  {
      "DepartmentId": 3,
      "Name": "Ban quản lý",
      "FaDeparment": null,
      "Departments": []
  },
  {
      "DepartmentId": 4,
      "Name": "Ban quản lý",
      "FaDeparment": null,
      "Departments": [
          {
              "DepartmentId": 6,
              "Name": "Bộ phận tính lương",
              "FaDeparment": 4,
              "Departments": []
          },
          {
              "DepartmentId": 7,
              "Name": "Quản lí nhân sự",
              "FaDeparment": 4,
              "Departments": []
          },
          {
              "DepartmentId": 8,
              "Name": "Quản lí nhân sự",
              "FaDeparment": 4,
              "Departments": []
          }
      ]
  },
  {
      "DepartmentId": 5,
      "Name": "Bộ nhân sự",
      "FaDeparment": null,
      "Departments": []
  }];

  @Input() TreeDepartment : any = [];
  
  public always = () => true;
  constructor(private common : CommonService) { }
  
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log('TreeView Onchange');
  }

  public ngOnInit(): void {
    this.common.getDepartmentTree();
    this.TreeDepartment = this.common.DepartmentTree;
    console.log('dashboard', this.TreeDepartment);
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
