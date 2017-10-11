import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Note } from '../models/note.model';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class NotesService {

  baseUrl = 'http://localhost:5678/api/notes';
  
  constructor(private http: Http) { }

  private attachToken(): Headers {
    let headers = new Headers();
    let token = localStorage.getItem('Authorization');
    headers.append('Authorization', token);
    return headers;
  }

  addItem(note: Note): Observable<any> {
    let headers = this.attachToken();
    return this.http.post(`${this.baseUrl}`, note, { headers })
      .map(res => res.json());
  }

  getList(): Observable<any> {
    let headers = this.attachToken();
    return this.http.get(`${this.baseUrl}`, { headers })
      .map(res => res.json());
  }

  updateItem(id, data: Note): Observable<any> {
    let headers = this.attachToken();
    return this.http.put(`${this.baseUrl}/${id}`, data, { headers })
      .map(res => res.json());
  }

}
