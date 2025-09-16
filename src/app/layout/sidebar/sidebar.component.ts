import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface MenuItem {
  icon: string;
  label: string;
  route: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  menuItems: MenuItem[] = [
    { icon: 'home', label: 'Inicio', route: '/' },
    { icon: 'library_music', label: 'Registros', route: '/records' },
    { icon: 'credit_card', label: 'Tarjetas', route: '/record-cards' },
    { icon: 'record_voice_over', label: 'Grabaciones', route: '/grabaciones' }
  ];

  constructor(private router: Router) {}

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}