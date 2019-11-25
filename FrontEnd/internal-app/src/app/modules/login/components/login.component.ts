import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { LoginModel } from './../models/login.model';
import { LoginService } from './../services/login.service';
import { ResponseModel } from 'src/app/core/models/response.model';
import { ResponseStatus } from 'src/app/core/enums/response.enum';
import { Router, ActivatedRoute } from '@angular/router';
import { TokenContext } from 'src/app/core/context/token.context';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoading = false;
  loginForm: FormGroup;
  returnUrl: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private loginService: LoginService,
    private context: TokenContext,
  ) { }

  ngOnInit() {
    this.returnUrl = this.activeRoute.snapshot.queryParams.returnUrl;
    if (this.context.isAuthenticated()) {
        this.router.navigate(['/demo/datatable'], {});
        return;
    }
    this.initForm();
  }

  initForm() {
    this.loginForm = this.fb.group({
      userName: [localStorage.getItem('username'), [Validators.required, Validators.maxLength(50)]],
      password: [localStorage.getItem('password'), [Validators.required, Validators.maxLength(50)]],
      rememberMe: [localStorage.getItem('rememberMe') ? localStorage.getItem('rememberMe') : false],
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
        if (this.loginForm.value.isKeepLoggedIn) {
          localStorage.setItem('username', this.loginForm.value.userName);
          localStorage.setItem('password', this.loginForm.value.password);
          localStorage.setItem('rememberMe', this.loginForm.value.rememberMe);
        } else {
          localStorage.removeItem('username');
          localStorage.removeItem('password');
          localStorage.removeItem('rememberMe');
        }
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
