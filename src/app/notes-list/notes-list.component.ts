import { Component, OnInit } from '@angular/core';
import {Note} from '../models/note';
import {NotesService} from '../notes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent {

  notes: Note[];
  selectedNote: Note;

  constructor (private notesService: NotesService,private router: Router, private route: ActivatedRoute) {
    this.getNotesFunc();
  }

  getNotesFunc(){
    this.notesService.getNotes().subscribe(
      data => {
        this.notes = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        if(this.notes.length == 0){
          alert('No notes to display');
        }
      },
      error => {console.log("Error:" + error);alert("Error occured");}
    );
  }

  openNote(noteId) {
    //console.log(noteId);
    this.router.navigate([`../note/${noteId}`], { relativeTo: this.route });
  }

  deleteNote(noteId) {
    //console.log(noteId);
    this.notesService.deleteNote(noteId).subscribe(
      data => {
        var status = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        if(status == 1){
          alert('Successfully deleted');
          this.getNotesFunc();
        }else{
          alert('Error occured');
        }
      },
      error => {console.log("Error:" + error);alert("Error occured");}
    );
  }

}
