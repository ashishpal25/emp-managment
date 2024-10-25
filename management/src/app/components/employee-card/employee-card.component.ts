import { Component } from '@angular/core';
import { ServiceEmpService, Employee } from '../../service-emp.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-employee-card',
  standalone: true,
  imports: [CommonModule,MatCardModule,RouterModule,MatButtonModule],
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.css']
})
export class EmployeeCardComponent {
  employee!: Employee;

  constructor(
    private route: ActivatedRoute,
    private employeeService: ServiceEmpService
  ) {}

  ngOnInit(): void {
    const employeeId = this.route.snapshot.paramMap.get('id');
    if (employeeId) {
      this.employeeService.getEmployeeById(employeeId).subscribe((data) => {
        this.employee = data;
      });
    } else {
      console.error('Employee ID not found ');
    }
  }
}
