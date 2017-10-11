import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Credentials } from '../models/credentials.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  private credentials = {} as Credentials;
  
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.auth.isLoggedIn().subscribe(
      isLoggedIn => {
        if (isLoggedIn) {
          this.auth.emitAuthState(true);
          this.router.navigate(['/notes']);
        }
        else 
          this.auth.emitAuthState(false);
      }
    );
  }

  onLoginWithEmailAndPassword(): void {
    this.auth.loginWithEmailAndPassword(this.credentials).subscribe(
      data => {
        localStorage.setItem('Authorization', data.token);
        this.router.navigate(['/notes']);
      }
    )
  }
}
