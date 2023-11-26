import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from './user.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  createUserForm: FormGroup;

  constructor(private formBuilder: FormBuilder, public userService: UserService) {
    this.createUserForm = this.formBuilder.group({
      username: '',
      password: '',
      email: ''
    });
  }

  ngOnInit() {
  }

  onCreateUserSubmit() {
    if (this.createUserForm.valid) {
      const { username, email, password } = this.createUserForm.value;
      this.userService.postNewUser(username, email, password)
        .subscribe(
          (response) => {
            console.log('User created:', response);
          },
          (error) => {
            console.error('Error creating user:', error);
          }
        );
    } else {
      console.error("User not created. Unknown Error.")
    }
}
}
