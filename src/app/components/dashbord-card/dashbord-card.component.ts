import { Component, Input, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { Note } from '../../interfaces/note';

@Component({
  selector: 'app-dashbord-card',
  standalone: true,
  imports:[RouterModule],
  templateUrl: './dashbord-card.component.html',
  styleUrls: ['./dashbord-card.component.scss']
})
export class DashbordCardComponent implements OnInit {
@Input () note!: Note;
@Input() i!:number;
  constructor() { }

  ngOnInit() {
  }

}
