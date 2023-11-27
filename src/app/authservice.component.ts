import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root',
  })
  export class AuthService {
    //private loggedIn = this.getToken != null;

    saveToken(token: string): void {
        sessionStorage.setItem('token', token);
      }
    
      getToken(): string | null {
        return sessionStorage.getItem('token');
      }
    
    getLoggedIn() {
      console.log(this.getToken() != null);
      return this.getToken() != null;
      
    }
  }