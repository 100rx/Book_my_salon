import { InMemoryDbService } from 'angular-in-memory-web-api';
import {Employee} from './employee-data';

export class EmployeeData implements InMemoryDbService {
  createDb() {
    let employees : Employee[]=[
      { id: 1, name: "Cute-cut", location: "Mysore", email:"ram@mail.com", mobile:"9867512345" },
     { id: 2, name: "Hair-with-flair", location: "Chennai", email:"raj@mail.com", mobile:"7867534521" },
     { id: 5, name: "Florex", location: "Mysore", email:"manju@mail.com", mobile:"6534587654" },
     { id: 3, name: "Better-feel", location: "Bangalore", email:"ramnath@mail.com", mobile:"9975437459" },
     { id: 4, name: "Curly-salon", location: "Pune", email:"vinay@mail.com", mobile:"9975287450" }
    ];
    return {employees};
  }

   genId(employees: Employee[]): number {
    return employees.length > 0 ? Math.max(...employees.map(emp => emp.id)) + 1 : 1;
  }
}