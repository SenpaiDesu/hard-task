import { Component, OnInit } from '@angular/core';
import { NotesService } from '../services/notes.service';
import { AuthService } from '../services/auth.service';
import { Note } from '../models/note.model';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  private isAdmin: boolean = false;
  private notesList = [];
  private newItem = {} as Note;
  //private changedItem = {} as Note;
  
  constructor(private notes: NotesService, private auth: AuthService) { }

  ngOnInit() {
    this.auth.getProfile().subscribe(
      data => {
        console.log(data.isAdmin);
        this.isAdmin = data.isAdmin
      }
    )
    
    this.notes.getList().subscribe(
      data => {
        this.notesList = data;
      }
    )
  }

  onCreate(): void {
    if (this.newItem)
      this.notes.addItem(this.newItem).subscribe(
        data => {
          this.notesList = data;
        }
      )
  }

  onUpdate(id): void {
    this.notes.updateItem(id, this.newItem).subscribe(
      data => {
        this.notesList = data;
      }
    )
  }

}
