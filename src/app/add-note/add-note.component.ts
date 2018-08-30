import { Component, OnInit } from '@angular/core';
import {NotesService} from '../notes.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent {
  model = {'username':'', 'title':'', 'description':''};
  constructor(private notesService: NotesService) { 
    this.model = {'username':'', 'title':'', 'description':''};
  }

  onSubmit(){
    this.model.username = localStorage.getItem("currentUserName");
    this.notesService.addNote(this.model).subscribe(
      data => {
        var status = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        if(status == 1){
          alert('Note added successfully');
          this.model = {'username':'', 'title':'', 'description':''};
        }else{
          alert('Error occured');
        }
      },
      error => {console.log(error);alert('Error occured');}
    );
  }

}
