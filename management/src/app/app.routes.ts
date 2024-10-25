import { Routes } from '@angular/router';
import {EmployeeListComponent} from "../app/components/employee-list/employee-list.component"
import {AddEmployeeComponent} from "../app/components/add-employee/add-employee.component"
import {EmployeeCardComponent} from "../app/components/employee-card/employee-card.component"

export const routes: Routes = [
  { path: '', component: EmployeeListComponent },
  { path: 'add', component: AddEmployeeComponent },
  // { path: 'cards', component: EmployeeCardComponent },
  { path: 'detail/:id', component: EmployeeCardComponent },


];
