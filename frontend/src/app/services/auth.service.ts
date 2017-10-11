import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Credentials } from '../models/credentials.model';
import { 
  Router, 
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot 
} from '@angular/router';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/share';

@Injectable()
export class AuthService {

  private baseUrl = 'http://localhost:5678/api/users';
  private emitter = new Subject<boolean>();
  private _authState = false;
  
  constructor(private http: Http, private router: Router) {

  }

  get authState(): Observable<boolean> {
    return this.emitter.asObservable();
  }

  emitAuthState(change: boolean) {
    this.emitter.next(change);
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.isLoggedIn()
      .do(allowed => {
        console.log(allowed);
        this.emitAuthState(allowed);
        if (!allowed) 
          this.router.navigate(['/signin']);
      }); 
  }

  isLoggedIn(): Observable<boolean> {
    let headers = new Headers();
    headers.append('Authorization', localStorage.getItem('Authorization'));
    return this.http.get(`${this.baseUrl}/auth-state`, { headers })
      .map(res => res.json())
      .map(data => data.isLoggedIn)
      .share();
  }

  getProfile(): Observable<any> {
    let headers = new Headers();
    headers.append('Authorization', localStorage.getItem('Authorization'));
    return this.http.get(`${this.baseUrl}/me`, { headers })
      .map(res => res.json())
  }

  register(credentials: Credentials): Observable<any> {
    return this.http.post(`${this.baseUrl}/signup`, credentials)
      .map(res => res.json());
  }

  loginWithEmailAndPassword(credentials: Credentials): Observable<any> {
    return this.http.post(`${this.baseUrl}/signin`, credentials)
      .map(res => res.json());
  }
}
