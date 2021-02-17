import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/_services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loading = false;
  returnUrl: any;
  hide = true;
  defaultReturnUrl = '/books';

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService,
    private toastr: ToastrService
  ) {
    if (this.authenticationService.currentTokenValue) {
      this.router.navigate(['/books']);
    }
  }

  imgPath = 'src/assets/images/login_logo.svg';

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
    this.returnUrl =
      this.route.snapshot.queryParams[`returnUrl`] || this.defaultReturnUrl;
  }

  login() {
    this.router.navigate(['books']);
  }

  onSubmit(loginData: { email: any; password: any }) {
    if (this.loginForm.invalid) {
      return;
    }

    this.authenticationService
      .login(loginData.email, loginData.password)
      .pipe(first())
      .subscribe(
        (data) => {
          this.router.navigate([this.returnUrl]);
        },
        (error) => {
          console.log(error);
          console.log(error.status === 401);
          const toastrOptions = {
            positionClass: 'toast-top-center',
            preventDuplicates: true,
            progressBar: true,
          };
          if (error.status === 401) {
            this.toastr.warning('E-mail e/ou senha incorretos', '');
          }
        }
      );
  }
}
