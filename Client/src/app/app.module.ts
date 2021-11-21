import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { MatDialogModule } from "@angular/material/dialog";
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import  { ManageEmployeeComponent } from './page/manage-employee/manage-employee.component'
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridEmployeeComponent } from './components/grid-employee/grid-employee.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { ExcelExportModule } from '@progress/kendo-angular-excel-export';

import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { PopupModule } from '@progress/kendo-angular-popup';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { ButtonAddComponent } from './components/button-add/button-add.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import {UpdateEmployeeComponent} from './components/update-employee/update-employee.component'



@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    DashboardComponent,
    GridEmployeeComponent,
    UpdateEmployeeComponent,
    ManageEmployeeComponent,
    ButtonAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TreeViewModule,
    BrowserAnimationsModule,
    GridModule,
    ExcelExportModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    DropDownsModule,
    NgxPaginationModule,
    PopupModule,
    DialogsModule,
    ButtonsModule
  ],
  providers: [UpdateEmployeeComponent],
  bootstrap: [AppComponent],
  entryComponents: [],
})
export class AppModule { }
