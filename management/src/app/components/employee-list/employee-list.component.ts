import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { ServiceEmpService, Employee } from '../../service-emp.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [MatFormFieldModule,MatSelectModule,MatTableModule,MatButtonModule,MatSortModule,RouterModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
  displayedColumns: string[] = ['id', 'name', 'email', 'department', 'joiningDate', 'actions'];
  dataSource!: MatTableDataSource<Employee>;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  departmentFilter: string = 'All';

  constructor(private employeeService: ServiceEmpService) {}

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe((employees) => {
      this.dataSource = new MatTableDataSource(employees);
      this.dataSource.sort = this.sort;
    });
  }

  applyDepartmentFilter() {
    this.dataSource.filter = this.departmentFilter.trim().toLowerCase();
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter((emp) => emp.id !== id);
    });
  }

}
