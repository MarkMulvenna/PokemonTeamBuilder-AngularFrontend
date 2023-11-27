import { Component } from '@angular/core';
import { AuthService } from './authservice.component';
@Component({
  selector: 'navigation',
  templateUrl: './nav.component.html'
})
export class NavComponent {
  constructor(public authService : AuthService) {}
    
}
