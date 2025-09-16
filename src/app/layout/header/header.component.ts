import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() title: string = 'Download Reorganizado';
  @Input() userName: string = '';
  @Input() isAuthenticated: boolean = false;
  @Output() signOut = new EventEmitter<void>();
  @Output() toggleSidebar = new EventEmitter<void>();

  onSignOut(): void {
    this.signOut.emit();
  }

  onToggleSidebar(): void {
    this.toggleSidebar.emit();
  }
}