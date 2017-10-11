import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Credentials } from '../models/credentials.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

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

  onRegister(): void {
    this.auth.register(this.credentials)
      .subscribe(
        data => { 
          localStorage.setItem('Authorization', data.token);
          this.router.navigate(['/notes']);
          
          
        }
      )
  }

}
