import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';
import { Router } from '@angular/router';
import { TokenService } from './core/services/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Grabaciones Históricas BP';
  isAuthenticated = false;
  userName = '';

  constructor(
    private router: Router,
    private tokenService: TokenService
  ) {}

  ngOnInit() {
    this.checkAuthStatus();
  }

  async checkAuthStatus() {
    try {
      const user = await Auth.currentAuthenticatedUser();
      this.isAuthenticated = true;
      this.userName = user.username || user.email || 'Usuario';
      this.tokenService.setToken(user.signInUserSession.accessToken.jwtToken);
    } catch (error) {
      this.isAuthenticated = false;
      this.userName = '';
      this.router.navigate(['/login']);
    }
  }

  async signOut() {
    try {
      await Auth.signOut();
      this.isAuthenticated = false;
      this.tokenService.clearToken();
      this.router.navigate(['/login']);
    } catch (error) {
      console.error('Error al cerrar sesión', error);
    }
  }
}