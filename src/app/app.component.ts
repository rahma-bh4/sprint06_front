import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, RouterOutlet,RouterLink]
})
export class AppComponent implements OnInit {
  title = 'Voitures';
  
  constructor(
    public authService: AuthService,
    private router: Router
  ) {}
  
  onLogout() {
    this.authService.logout();
  }
  
  ngOnInit() {
    this.authService.loadToken();
    if (this.authService.getToken() == null || this.authService.isTokenExpired())
      this.router.navigate(['/login']);
  }
}