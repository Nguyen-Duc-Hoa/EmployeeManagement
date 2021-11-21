import { Component, OnInit, ViewChild } from '@angular/core';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { EmployeeServiceService } from 'src/app/Services/EmployeeServices/employee-service.service';
import { UpdateEmployeeComponent } from '../update-employee/update-employee.component';

@Component({
  selector: 'app-grid-employee',
  templateUrl: './grid-employee.component.html',
  styleUrls: ['./grid-employee.component.css']
})
export class GridEmployeeComponent implements OnInit {

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
  public listItems: any = [
    { text: "Small", value: 1 },
    { text: "Medium", value: 2 },
    { text: "Large", value: 3 },
  ];
  // Trying to assign a primitive value to the DropDownListComponent

  public selectedPosition : any = { Id: 1 };
  public selectedTitle : any = { value: 1 };
  public selectedDepartment : any = { department: "Bed Linen", id: 6};
  
  public Id : any;
  public Firstname : any;
  public Lastname : any;
  public opened = false;
  public gridView : GridDataResult;
  public skip = 0;
  public pagesize = 5;
  public currentPage = 1;
  public gridData: any[] = [
      {
        Id: "ALFKI",
        CompanyName: "Alfreds Futterkiste",
        ContactName: "Maria Anders",
        ContactTitle: "Sales Representative",
        City: "Berlin",
      },
      {
        Id: "ANATR",
        CompanyName: "Ana Trujillo Emparedados y helados",
        ContactName: "Ana Trujillo",
        ContactTitle: "Owner",
        City: "México D.F.",
      },
      {
        Id: "ANTON",
        CompanyName: "Antonio Moreno Taquería",
        ContactName: "Antonio Moreno",
        ContactTitle: "Owner",
        City: "México D.F.",
      },
      {
        Id: "AROUT",
        CompanyName: "Around the Horn",
        ContactName: "Thomas Hardy",
        ContactTitle: "Sales Representative",
        City: "London",
      },
      {
        Id: "BERGS",
        CompanyName: "Berglunds snabbköp",
        ContactName: "Christina Berglund",
        ContactTitle: "Order Administrator",
        City: "Luleå",
      },
      {
        Id: "BLAUS",
        CompanyName: "Blauer See Delikatessen",
        ContactName: "Hanna Moos",
        ContactTitle: "Sales Representative",
        City: "Mannheim",
      },
      {
        Id: "BLONP",
        CompanyName: "Blondesddsl père et fils",
        ContactName: "Frédérique Citeaux",
        ContactTitle: "Marketing Manager",
        City: "Strasbourg",
      },
      {
        Id: "BOLID",
        CompanyName: "Bólido Comidas preparadas",
        ContactName: "Martín Sommer",
        ContactTitle: "Owner",
        City: "Madrid",
      },
      {
        Id: "BONAP",
        CompanyName: "Bon app",
        ContactName: "Laurence Lebihan",
        ContactTitle: "Owner",
        City: "Marseille",
      },
      {
        Id: "BOTTM",
        CompanyName: "Bottom-Dollar Markets",
        ContactName: "Elizabeth Lincoln",
        ContactTitle: "Accounting Manager",
        City: "Tsawassen",
      },
      {
        Id: "ALFKI",
        CompanyName: "Alfreds Futterkiste",
        ContactName: "Maria Anders",
        ContactTitle: "Sales Representative",
        Address: "Obere Str. 57",
        City: "Berlin",
        PostalCode: "12209",
        Country: "Germany",
        Phone: "030-0074321",
        Fax: "030-0076545",
      },
      {
        Id: "ANATR",
        CompanyName: "Ana Trujillo Emparedados y helados",
        ContactName: "Ana Trujillo",
        ContactTitle: "Owner",
        Address: "Avda. de la Constitución 2222",
        City: "México D.F.",
        PostalCode: "05021",
        Country: "Mexico",
        Phone: "(5) 555-4729",
        Fax: "(5) 555-3745",
      },
      {
        Id: "ANTON",
        CompanyName: "Antonio Moreno Taquería",
        ContactName: "Antonio Moreno",
        ContactTitle: "Owner",
        Address: "Mataderos  2312",
        City: "México D.F.",
        PostalCode: "05023",
        Country: "Mexico",
        Phone: "(5) 555-3932",
      },
      {
        Id: "AROUT",
        CompanyName: "Around the Horn",
        ContactName: "Thomas Hardy",
        ContactTitle: "Sales Representative",
        Address: "120 Hanover Sq.",
        City: "London",
        PostalCode: "WA1 1DP",
        Country: "UK",
        Phone: "(171) 555-7788",
        Fax: "(171) 555-6750",
      },
      {
        Id: "BERGS",
        CompanyName: "Berglunds snabbköp",
        ContactName: "Christina Berglund",
        ContactTitle: "Order Administrator",
        Address: "Berguvsvägen  8",
        City: "Luleå",
        PostalCode: "S-958 22",
        Country: "Sweden",
        Phone: "0921-12 34 65",
        Fax: "0921-12 34 67",
      },
      {
        Id: "BLAUS",
        CompanyName: "Blauer See Delikatessen",
        ContactName: "Hanna Moos",
        ContactTitle: "Sales Representative",
        Address: "Forsterstr. 57",
        City: "Mannheim",
        PostalCode: "68306",
        Country: "Germany",
        Phone: "0621-08460",
        Fax: "0621-08924",
      },
      {
        Id: "BLONP",
        CompanyName: "Blondesddsl père et fils",
        ContactName: "Frédérique Citeaux",
        ContactTitle: "Marketing Manager",
        Address: "24, place Kléber",
        City: "Strasbourg",
        PostalCode: "67000",
        Country: "France",
        Phone: "88.60.15.31",
        Fax: "88.60.15.32",
      },
      {
        Id: "BOLID",
        CompanyName: "Bólido Comidas preparadas",
        ContactName: "Martín Sommer",
        ContactTitle: "Owner",
        Address: "C/ Araquil, 67",
        City: "Madrid",
        PostalCode: "28023",
        Country: "Spain",
        Phone: "(91) 555 22 82",
        Fax: "(91) 555 91 99",
      },
      {
        Id: "BONAP",
        CompanyName: "Bon app",
        ContactName: "Laurence Lebihan",
        ContactTitle: "Owner",
        Address: "12, rue des Bouchers",
        City: "Marseille",
        PostalCode: "13008",
        Country: "France",
        Phone: "91.24.45.40",
        Fax: "91.24.45.41",
      },
      {
        Id: "BOTTM",
        CompanyName: "Bottom-Dollar Markets",
        ContactName: "Elizabeth Lincoln",
        ContactTitle: "Accounting Manager",
        Address: "23 Tsawassen Blvd.",
        City: "Tsawassen",
        Region: "BC",
        PostalCode: "T2F 8M4",
        Country: "Canada",
        Phone: "(604) 555-4729",
        Fax: "(604) 555-3745",
      },
      {
        Id: "BSBEV",
        CompanyName: "Bad Beverages",
        ContactName: "Victoria Ashworth",
        ContactTitle: "Sales Representative",
        Address: "Fauntleroy Circus",
        City: "London",
        PostalCode: "EC2 5NT",
        Country: "UK",
        Phone: "(171) 555-1212",
      },
      {
        Id: "CACTU",
        CompanyName: "Cactus Comidas para llevar",
        ContactName: "Patricio Simpson",
        ContactTitle: "Sales Agent",
        Address: "Cerrito 333",
        City: "Buenos Aires",
        PostalCode: "1010",
        Country: "Argentina",
        Phone: "(1) 135-5555",
        Fax: "(1) 135-4892",
      },
      {
        Id: "CENTC",
        CompanyName: "Centro comercial Moctezuma",
        ContactName: "Francisco Chang",
        ContactTitle: "Marketing Manager",
        Address: "Sierras de Granada 9993",
        City: "México D.F.",
        PostalCode: "05022",
        Country: "Mexico",
        Phone: "(5) 555-3392",
        Fax: "(5) 555-7293",
      },
      {
        Id: "CHOPS",
        CompanyName: "Chop-suey Chinese",
        ContactName: "Yang Wang",
        ContactTitle: "Owner",
        Address: "Hauptstr. 29",
        City: "Bern",
        PostalCode: "3012",
        Country: "Switzerland",
        Phone: "0452-076545",
      },
      {
        Id: "COMMI",
        CompanyName: "Comércio Mineiro",
        ContactName: "Pedro Afonso",
        ContactTitle: "Sales Associate",
        Address: "Av. dos Lusíadas, 23",
        City: "Sao Paulo",
        Region: "SP",
        PostalCode: "05432-043",
        Country: "Brazil",
        Phone: "(11) 555-7647",
      },
      {
        Id: "CONSH",
        CompanyName: "Consolidated Holdings",
        ContactName: "Elizabeth Brown",
        ContactTitle: "Sales Representative",
        Address: "Berkeley Gardens 12  Brewery",
        City: "London",
        PostalCode: "WX1 6LT",
        Country: "UK",
        Phone: "(171) 555-2282",
        Fax: "(171) 555-9199",
      },
      {
        Id: "DRACD",
        CompanyName: "Drachenblut Delikatessen",
        ContactName: "Sven Ottlieb",
        ContactTitle: "Order Administrator",
        Address: "Walserweg 21",
        City: "Aachen",
        PostalCode: "52066",
        Country: "Germany",
        Phone: "0241-039123",
        Fax: "0241-059428",
      },
      {
        Id: "DUMON",
        CompanyName: "Du monde entier",
        ContactName: "Janine Labrune",
        ContactTitle: "Owner",
        Address: "67, rue des Cinquante Otages",
        City: "Nantes",
        PostalCode: "44000",
        Country: "France",
        Phone: "40.67.88.88",
        Fax: "40.67.89.89",
      },
      {
        Id: "EASTC",
        CompanyName: "Eastern Connection",
        ContactName: "Ann Devon",
        ContactTitle: "Sales Agent",
        Address: "35 King George",
        City: "London",
        PostalCode: "WX3 6FW",
        Country: "UK",
        Phone: "(171) 555-0297",
        Fax: "(171) 555-3373",
      },
      {
        Id: "ERNSH",
        CompanyName: "Ernst Handel",
        ContactName: "Roland Mendel",
        ContactTitle: "Sales Manager",
        Address: "Kirchgasse 6",
        City: "Graz",
        PostalCode: "8010",
        Country: "Austria",
        Phone: "7675-3425",
        Fax: "7675-3426",
      },
      {
        Id: "FAMIA",
        CompanyName: "Familia Arquibaldo",
        ContactName: "Aria Cruz",
        ContactTitle: "Marketing Assistant",
        Address: "Rua Orós, 92",
        City: "Sao Paulo",
        Region: "SP",
        PostalCode: "05442-030",
        Country: "Brazil",
        Phone: "(11) 555-9857",
      },
      {
        Id: "FISSA",
        CompanyName: "FISSA Fabrica Inter. Salchichas S.A.",
        ContactName: "Diego Roel",
        ContactTitle: "Accounting Manager",
        Address: "C/ Moralzarzal, 86",
        City: "Madrid",
        PostalCode: "28034",
        Country: "Spain",
        Phone: "(91) 555 94 44",
        Fax: "(91) 555 55 93",
      },
      {
        Id: "FOLIG",
        CompanyName: "Folies gourmandes",
        ContactName: "Martine Rancé",
        ContactTitle: "Assistant Sales Agent",
        Address: "184, chaussée de Tournai",
        City: "Lille",
        PostalCode: "59000",
        Country: "France",
        Phone: "20.16.10.16",
        Fax: "20.16.10.17",
      },
      {
        Id: "FOLKO",
        CompanyName: "Folk och fä HB",
        ContactName: "Maria Larsson",
        ContactTitle: "Owner",
        Address: "Åkergatan 24",
        City: "Bräcke",
        PostalCode: "S-844 67",
        Country: "Sweden",
        Phone: "0695-34 67 21",
      },
      {
        Id: "FRANK",
        CompanyName: "Frankenversand",
        ContactName: "Peter Franken",
        ContactTitle: "Marketing Manager",
        Address: "Berliner Platz 43",
        City: "München",
        PostalCode: "80805",
        Country: "Germany",
        Phone: "089-0877310",
        Fax: "089-0877451",
      },
      {
        Id: "FRANR",
        CompanyName: "France restauration",
        ContactName: "Carine Schmitt",
        ContactTitle: "Marketing Manager",
        Address: "54, rue Royale",
        City: "Nantes",
        PostalCode: "44000",
        Country: "France",
        Phone: "40.32.21.21",
        Fax: "40.32.21.20",
      },
      {
        Id: "FRANS",
        CompanyName: "Franchi S.p.A.",
        ContactName: "Paolo Accorti",
        ContactTitle: "Sales Representative",
        Address: "Via Monte Bianco 34",
        City: "Torino",
        PostalCode: "10100",
        Country: "Italy",
        Phone: "011-4988260",
        Fax: "011-4988261",
      },
      {
        Id: "FURIB",
        CompanyName: "Furia Bacalhau e Frutos do Mar",
        ContactName: "Lino Rodriguez",
        ContactTitle: "Sales Manager",
        Address: "Jardim das rosas n. 32",
        City: "Lisboa",
        PostalCode: "1675",
        Country: "Portugal",
        Phone: "(1) 354-2534",
        Fax: "(1) 354-2535",
      },
      {
        Id: "GALED",
        CompanyName: "Galería del gastrónomo",
        ContactName: "Eduardo Saavedra",
        ContactTitle: "Marketing Manager",
        Address: "Rambla de Cataluña, 23",
        City: "Barcelona",
        PostalCode: "08022",
        Country: "Spain",
        Phone: "(93) 203 4560",
        Fax: "(93) 203 4561",
      },
      {
        Id: "GODOS",
        CompanyName: "Godos Cocina Típica",
        ContactName: "José Pedro Freyre",
        ContactTitle: "Sales Manager",
        Address: "C/ Romero, 33",
        City: "Sevilla",
        PostalCode: "41101",
        Country: "Spain",
        Phone: "(95) 555 82 82",
      },
      {
        Id: "GOURL",
        CompanyName: "Gourmet Lanchonetes",
        ContactName: "André Fonseca",
        ContactTitle: "Sales Associate",
        Address: "Av. Brasil, 442",
        City: "Campinas",
        Region: "SP",
        PostalCode: "04876-786",
        Country: "Brazil",
        Phone: "(11) 555-9482",
      },
      {
        Id: "GREAL",
        CompanyName: "Great Lakes Food Market",
        ContactName: "Howard Snyder",
        ContactTitle: "Marketing Manager",
        Address: "2732 Baker Blvd.",
        City: "Eugene",
        Region: "OR",
        PostalCode: "97403",
        Country: "USA",
        Phone: "(503) 555-7555",
      },
      {
        Id: "GROSR",
        CompanyName: "GROSELLA-Restaurante",
        ContactName: "Manuel Pereira",
        ContactTitle: "Owner",
        Address: "5ª Ave. Los Palos Grandes",
        City: "Caracas",
        Region: "DF",
        PostalCode: "1081",
        Country: "Venezuela",
        Phone: "(2) 283-2951",
        Fax: "(2) 283-3397",
      },
      {
        Id: "HANAR",
        CompanyName: "Hanari Carnes",
        ContactName: "Mario Pontes",
        ContactTitle: "Accounting Manager",
        Address: "Rua do Paço, 67",
        City: "Rio de Janeiro",
        Region: "RJ",
        PostalCode: "05454-876",
        Country: "Brazil",
        Phone: "(21) 555-0091",
        Fax: "(21) 555-8765",
      },
      {
        Id: "HILAA",
        CompanyName: "HILARION-Abastos",
        ContactName: "Carlos Hernández",
        ContactTitle: "Sales Representative",
        Address: "Carrera 22 con Ave. Carlos Soublette #8-35",
        City: "San Cristóbal",
        Region: "Táchira",
        PostalCode: "5022",
        Country: "Venezuela",
        Phone: "(5) 555-1340",
        Fax: "(5) 555-1948",
      },
      {
        Id: "HUNGC",
        CompanyName: "Hungry Coyote Import Store",
        ContactName: "Yoshi Latimer",
        ContactTitle: "Sales Representative",
        Address: "City Center Plaza 516 Main St.",
        City: "Elgin",
        Region: "OR",
        PostalCode: "97827",
        Country: "USA",
        Phone: "(503) 555-6874",
        Fax: "(503) 555-2376",
      }
    ];

  constructor(private editUser: UpdateEmployeeComponent, private employeeService: EmployeeServiceService) {
    this.gridView ={ data: this.gridData, total: this.gridData.length}
   }

  public ngOnInit(): void {

  }

  public doubleclick(){
    console.log('click');
  }


  public dblClickEvent(event : any) {
    // debugger;
    console.log('the selected row Index is '+ event.path[1].rowIndex );
    //use the following line if you want to get the clicked cell content:
    console.log('clicked cell content'+ event.path[0].rowIndex);
    console.log('data: ', this.gridData[event.path[1].rowIndex])
    this.Firstname = this.gridData[event.path[1].rowIndex].ContactName;
    this.Lastname = this.gridData[event.path[1].rowIndex].ContactName;
    this.selectedTitle = {value: 2};
    this.selectedPosition = {Id:2};
    this.selectedDepartment = {department: "Furniture", id: 1};
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
    this.gridData = [{
      Id: "HUNGO",
      CompanyName: "Hungry Owl All-Night Grocers",
      ContactName: "Patricia McKenna",
      ContactTitle: "Sales Associate",
      Address: "8 Johnstown Road",
      City: "Cork",
      Region: "Co. Cork",
      Country: "Ireland",
      Phone: "2967 542",
      Fax: "2967 3333",
    },
    {
      Id: "ISLAT",
      CompanyName: "Island Trading",
      ContactName: "Helen Bennett",
      ContactTitle: "Marketing Manager",
      Address: "Garden House Crowther Way",
      City: "Cowes",
      Region: "Isle of Wight",
      PostalCode: "PO31 7PJ",
      Country: "UK",
      Phone: "(198) 555-8888",
    },
    {
      Id: "LINOD",
      CompanyName: "LINO-Delicateses",
      ContactName: "Felipe Izquierdo",
      ContactTitle: "Owner",
      Address: "Ave. 5 de Mayo Porlamar",
      City: "I. de Margarita",
      Region: "Nueva Esparta",
      PostalCode: "4980",
      Country: "Venezuela",
      Phone: "(8) 34-56-12",
      Fax: "(8) 34-93-93",
    }];

    this.gridView ={ data: this.gridData, total: this.gridData.length,}
  }

}
