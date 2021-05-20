import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-to-junxure',
  templateUrl: './login-to-junxure.component.html',
  styleUrls: ['./login-to-junxure.component.scss']
})
export class LoginToJunxureComponent implements OnInit {
  validateForm!: FormGroup;
  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
