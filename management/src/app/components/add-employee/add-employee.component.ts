import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceEmpService, Employee } from '../../service-emp.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import {FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [FormsModule,RouterModule,CommonModule,MatFormFieldModule,MatOptionModule,MatSelectModule,MatTableModule,MatButtonModule,MatSortModule,ReactiveFormsModule,MatInputModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {
  employeeForm: FormGroup;

  constructor(private fb: FormBuilder, private employeeService: ServiceEmpService,private router: Router) {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      department: ['', Validators.required],
      joiningDate: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.employeeForm.valid) {
      this.employeeService.addEmployee(this.employeeForm.value).subscribe(
        () => {
          this.router.navigate(['/']);
        });
    }
  }

}
