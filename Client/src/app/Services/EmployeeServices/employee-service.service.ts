import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor() { }

  form: FormGroup = new FormGroup({
    $Id: new FormControl(null),
    FirstName: new FormControl('', Validators.required),
    LastName: new FormControl('', Validators.required),
    Avatar: new FormControl(''),
    Department: new FormControl(''),
    Position: new FormControl(''),
    Title: new FormControl(0),
  });
  
  initializeFormGroup() {
    this.form.setValue({
      $Id: null,
      FirstName: '',
      LastName: '',
      Avatar: '',
      Department: '',
      Position: '',
      Title: ''
    });
  }
}
