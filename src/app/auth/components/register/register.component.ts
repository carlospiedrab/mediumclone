import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

form = new FormGroup({
  userName: new FormControl(''),
  email: new FormControl(''),
  password: new FormControl(''),
})



  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void{
    this.form = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      email:  ['', Validators.required],
    })
  }

  onSubmit(): void {
    console.log('submit', this.form.value, this.form.valid)
  }
}
