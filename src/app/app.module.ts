import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {routing} from './app.routing';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { RegisterServiceService } from './register-service.service';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login.service';
import { NotesListComponent } from './notes-list/notes-list.component';
import { NotesService } from './notes.service';
import { NoteComponent } from './note/note.component';
import { AddNoteComponent } from './add-note/add-note.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    NotesListComponent,
    NoteComponent,
    AddNoteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [RegisterServiceService, LoginService, NotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
