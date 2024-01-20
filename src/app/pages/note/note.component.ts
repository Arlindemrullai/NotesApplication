import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { NotesService } from '../../services/notes.service';
import { Note } from '../../interfaces/note';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-note',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './note.component.html',
  styleUrl: './note.component.scss'
})
export class NoteComponent implements OnInit {
  route = inject(ActivatedRoute);
  router = inject(Router)
  noteService = inject(NotesService);
  note: Note | undefined;
  noteId: any;


  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      this.noteId = param.get('id');
      console.log(this.noteId)
      this.noteService.getNotes()
        .subscribe((note: Note[]) => {
          this.note = note[this.noteId];
        });

    });
  }
deleteNote() {
  this.noteService.deleteNote(this.noteId)
  this.router.navigate(['']);
}
}
