import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  username: any;
  password: any;

  constructor(public userService: UserService) {}

  ngOnInit() {
  }

  onLoginSubmit() : void{
    this.userService.login(this.username, this.password).subscribe()
  }
}
