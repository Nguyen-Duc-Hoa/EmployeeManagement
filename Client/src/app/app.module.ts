import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { MatDialogModule } from "@angular/material/dialog";
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridEmployeeComponent } from './components/grid-employee/grid-employee.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { ExcelExportModule } from '@progress/kendo-angular-excel-export';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';






@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    DashboardComponent,
    GridEmployeeComponent,
    AddEmployeeComponent
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
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AddEmployeeComponent],
})
export class AppModule { }
