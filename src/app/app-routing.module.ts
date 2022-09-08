import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddEmployeeComponent } from './Add-Employee/Add-Employee.component';
import { EmployeeListComponent } from './Employee-List/Employee-List.component';

const routes: Routes = [
  {path:'addemployee', component: AddEmployeeComponent},
  {path:'employeelist',component:EmployeeListComponent},
  {path:'addemployee/:id',component: AddEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule, NgbModule], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[AddEmployeeComponent,EmployeeListComponent]
