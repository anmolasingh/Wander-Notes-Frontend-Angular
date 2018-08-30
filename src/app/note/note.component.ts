import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {NotesService} from '../notes.service';
import {Note} from '../models/note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  noteId = -1;
  selectedNote: Note;
  isReadOnly: boolean;

  ngOnInit(){
    this.isReadOnly = true;
  }

  constructor(private route: ActivatedRoute, private notesService: NotesService) {
    this.getNoteFunc();
  }

  getNoteFunc(){
    this.noteId = this.route.snapshot.params['id'];
    //console.log("noteId:" + this.noteId);
    this.notesService.getNote(this.noteId).subscribe(
      data => {
        console.log(JSON.parse(JSON.parse(JSON.stringify(data))._body));
        this.selectedNote = JSON.parse(JSON.parse(JSON.stringify(data))._body);
      },
      error => {console.log("Error:" + error);alert("Error occured");}
    );
  }

  enableEdit(){
    this.isReadOnly = false;
  }

  onSubmit(){
    this.notesService.updateNote(this.selectedNote).subscribe(
      data => {
        var status = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        if(status == 1){
          alert('Note updated successfully');
          this.getNoteFunc();
          this.isReadOnly = true;
        }else{
          alert('Error occured');
        }
      },
      error => {console.log(error);alert('Error occured');}
    );
  }

}
