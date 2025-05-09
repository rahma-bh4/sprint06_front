import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { User } from '../model/user.model';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  public user = new User();
  err: any;
  confirmPassword?: string;
  myForm!: FormGroup;
  loading: boolean=false;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router:Router,
    private toastr: ToastrService
  ) {}
  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
    });
  }
  onRegister() {
    this.loading=true;
    this.authService.registerUser(this.user).subscribe({
      next: (res) => {
        this. authService.setRegistredUser(this.user);
        this.loading=false;
       // alert('veillez confirmer votre email');
       this.toastr.success('veuillez confirmer votre email', 'Confirmation');

        this.router.navigate(['/verifEmail']);
        // this.router.navigate(["/verifEmail",this.user.email]);
      },
      error: (err: any) => {
        this.loading=false;
        if (err.error.errorCode == 'USER_EMAIL_ALREADY_EXISTS') {
          this.err = 'Email already used !';
        }
      },
    });
  }
}
