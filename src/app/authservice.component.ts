import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root',
  })
  export class AuthService {
    private loggedIn = new BehaviorSubject<boolean>(false);

    saveToken(token: string): void {
        sessionStorage.setItem('token', token);
      }
    
      getToken(): string | null {
        return sessionStorage.getItem('token');
      }
  }