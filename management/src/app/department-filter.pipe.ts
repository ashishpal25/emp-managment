import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from './service-emp.service';

@Pipe({
  name: 'departmentFilter',
  standalone: true
})
export class DepartmentFilterPipe implements PipeTransform {

  transform(employees: Employee[], department: string): Employee[] {
    if (!department || department === 'All') {
      return employees;
    }
    return employees.filter((emp) => emp.department === department);
  }

}
