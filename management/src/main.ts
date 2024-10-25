import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
import { DepartmentFilterPipe } from './app/department-filter.pipe';
import { ServiceEmpService } from './app/service-emp.service';
import { provideRouter, RouterModule } from '@angular/router';
import { routes } from './app/app.routes'; // Import your routes
import { provideAnimations } from '@angular/platform-browser/animations';
bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withFetch()),
    ReactiveFormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatSortModule,
    ServiceEmpService,
    DepartmentFilterPipe,
    provideRouter(routes),
    provideAnimations()
  ]
}).catch(err => console.error(err));
