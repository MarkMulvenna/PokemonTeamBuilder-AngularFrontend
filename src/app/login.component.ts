import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from './user.service';
import { AuthService } from './authservice.component';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, public userService: UserService, private authService: AuthService) {
    this.loginForm = this.formBuilder.group({
      username: '',
      password: '',
    });
  }

  ngOnInit() {
  }

  onLoginSubmit() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      this.userService.login(username, password)
        .subscribe(
          (response : any) => {
            console.log('User Logged In:', response);
            this.authService.saveToken(response.token)
          },
          (error) => {
            console.error('Error finding user:', error);
          }
        );
    } else {
      console.error("Login Failed. Unknown Error.")
    }
}
}
