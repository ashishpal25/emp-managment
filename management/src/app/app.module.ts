import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EmployeeCardComponent } from './components/employee-card/employee-card.component';
import { DepartmentFilterPipe } from './department-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    AddEmployeeComponent,
    EmployeeCardComponent,
    DepartmentFilterPipe,
  ],
  imports: [
    BrowserModule,

  ],
  providers: [
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
