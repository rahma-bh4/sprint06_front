import { Component } from '@angular/core';
import { User } from '../model/user.model';
import { AuthService } from '../services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: ``,
    standalone: true,
    imports: [NgIf, FormsModule, RouterLink]
})
export class LoginComponent {
user=new User();
err:number = 0;
message:string="Login ou mot de passe erronés..";

constructor(private authService : AuthService,
  private router: Router){}
  onLoggedin()
  {
    this.authService.login(this.user).subscribe({
      next: (data) => {
      let jwToken = data.headers.get('Authorization')!;
      this.authService.saveToken(jwToken);
      this.router.navigate(['/']);
      },
      error: (err: any) => {
        this.err = 1;
        if(err.error.errorCause=="disabled")
        {this.message="L'utilisateur est désactivé!";}
     
      }
      });
  }
  
}
