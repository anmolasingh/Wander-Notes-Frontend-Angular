import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent }  from './home/home.component';
import { RegisterComponent }  from './register/register.component';
import { LoginComponent }  from './login/login.component';
import { NotesListComponent }  from './notes-list/notes-list.component';
import { NoteComponent }  from './note/note.component';
import { AddNoteComponent }  from './add-note/add-note.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'notes_list',
    component: NotesListComponent
  },
  {
    path: 'note/:id',
    component: NoteComponent
  },
  {
    path: 'add_note',
    component: AddNoteComponent
  }
  
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);