import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { NotesService } from '../../services/notes.service';
import { Note } from '../../interfaces/note';
import { DashbordCardComponent } from '../../components/dashbord-card/dashbord-card.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule,DashbordCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  noteService = inject(NotesService);
  allNotes: Note[] | undefined;


  ngOnInit(): void {
    this.noteService.getNotes().subscribe((notes: Note[]) => {
      this.allNotes = notes;

    })
  }
}


