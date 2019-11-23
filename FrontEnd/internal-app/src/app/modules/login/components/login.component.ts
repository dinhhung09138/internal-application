import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { LoginModel } from './../models/login.model';
import { LoginService } from './../services/login.service';
import { ResponseModel } from 'src/app/core/models/response.model';
import { ResponseStatus } from 'src/app/core/enums/response.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoading = false;
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: Router,
    private loginService: LoginService,
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.fb.group({
      userName: [null, [Validators.required, Validators.maxLength(50)]],
      password: [null, [Validators.required, Validators.maxLength(50)]],
    });
  }

  get f() { return this.loginForm.controls; }

  onSubmitForm() {
    this.isLoading = true;
    this.loginService.login(this.loginForm.value).subscribe((res: ResponseModel) => {
      if (res.responseStatus === ResponseStatus.warning) {
        window.alert(res.errors.join(','));
      } else if (res.responseStatus === ResponseStatus.error) {
        window.alert(res.errors.join(','));
      } else if (res.responseStatus === ResponseStatus.success) {
        this.route.navigate(['/']);
      }
      this.isLoading = false;
    }, err => {
      console.log(err);
      this.isLoading = false;
    });
  }

}
