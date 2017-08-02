import { Component, OnInit } from '@angular/core';
import { Employee } from "app/shared/models/employee";
import { EmployeesService } from "app/shared/services/employees.service";

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {
  employee;
  successMessage: string;

  constructor(private empService: EmployeesService) { }

  ngOnInit() {
    this.employee = new Employee();
  }

  createEmployee() {
    this.empService.createEmployee(this.employee)
        .subscribe(employee => {
          this.successMessage = 'Employee Created Successfully'
          setTimeout(() => this.successMessage = '', 3000);
        });
  }
}
