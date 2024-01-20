import { Routes } from '@angular/router';
import { NewNoteComponent } from './pages/new-note/new-note.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NoteComponent } from './pages/note/note.component';


export const routes: Routes = [{
    path: '',
    component: DashboardComponent
}, {
    path: 'new-note',
    component: NewNoteComponent
}, {
    path: 'note/:id',
      component: NoteComponent
}, {
    path: '**', 
    component: NotFoundComponent
}];
