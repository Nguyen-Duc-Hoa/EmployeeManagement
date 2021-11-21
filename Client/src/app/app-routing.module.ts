import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './components/employees/employees.component';
import { ManageEmployeeComponent } from './page/manage-employee/manage-employee.component';



const routes: Routes = [
  {path:'ManageEmployee', component: ManageEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
