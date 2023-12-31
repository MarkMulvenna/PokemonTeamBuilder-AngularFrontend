import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AuthService } from './authservice.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  postNewUser(username: string, email: string, password: string) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new HttpParams()
      .set('username', username)
      .set('email', email)
      .set('password', password);
    return this.http.post('http://localhost:5000/api/v1.0/users', body.toString(), { headers });
  }

  login(userName: string, password: string) {
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa(userName + ':' + password)
    });
    
    return this.http.get('http://localhost:5000/api/v1.0/login', { headers });
  }
}
