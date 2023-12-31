import { Component, inject } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  private authService = inject(AuthService)



  sidebarVisible!: boolean;

  onLogout() {

    this.authService.logout();

  }



}
