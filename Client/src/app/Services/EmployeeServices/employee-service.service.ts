import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private form : FormBuilder) { }

  employee: FormGroup = new FormGroup({
    Id: new FormControl(null),
    FirstName: new FormControl('', Validators.required),
    LastName: new FormControl('', Validators.required),
    Avatar: new FormControl(''),
    Department: new FormControl('', Validators.required),
    Position: new FormControl('', Validators.required),
    Title: new FormControl('', Validators.required),
  });
  
  employee1 : any = {
      Id: '',
      FirstName: '',
      LastName: '',
      Avatar: '',
      DepartmentId: '',
      PositionId: '',
      TitleId: ''
  }
  initializeFormGroup() {
    this.employee.setValue({
      Id: null,
      FirstName: '',
      LastName: '',
      Avatar: '',
      Department: '',
      Position: '',
      Title: ''
    });
  }
}
