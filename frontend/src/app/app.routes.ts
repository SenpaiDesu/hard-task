import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NotesComponent } from './notes/notes.component';
import { AuthService } from './services/auth.service';

import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'signin', component: SignInComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'notes', component: NotesComponent, canActivate: [AuthService] },
  { path: '', pathMatch: 'full', redirectTo: '/signin' }
];
