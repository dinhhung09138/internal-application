import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { LoginModel } from './../models/login.model';
import { LoginService } from './../services/login.service';
import { ResponseModel } from 'src/app/core/models/response.model';
import { ResponseStatus } from 'src/app/core/enums/response.enum';
import { Router } from '@angular/router';
import { TokenContext } from 'src/app/core/context/token.context';

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
    private router: Router,
    private loginService: LoginService,
    private context: TokenContext,
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
        console.log(res.errors.join(','));
      } else if (res.responseStatus === ResponseStatus.error) {
        console.log(res.errors.join(','));
      } else if (res.responseStatus === ResponseStatus.success) {
        console.log(res.result);
        this.context.saveToken(res.result);
        console.log('login success');
        this.router.navigate(['/demo/datatable']);
      }
      this.isLoading = false;
    }, err => {
      console.log(err);
      this.isLoading = false;
    });
  }

}
