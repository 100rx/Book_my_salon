import { Component } from '@angular/core';
import { Employee } from '../employee-data';
import { DataService} from '../employee.service'
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'add',
  templateUrl: './add.component.html'
})

export class AddEmployeeComponent {

  employee:Employee;
  constructor( private dataService: DataService, private router:Router){};
  valid:false;
  goBack(): void {
    this.router.navigate(['/employees']);
  }
   add(f: NgForm)
   {
     this.employee=f.value;
      this.dataService.addEmployee(this.employee).subscribe(() => this.goBack());
   }

}