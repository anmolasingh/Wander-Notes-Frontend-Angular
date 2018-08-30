import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Note} from './models/note';

@Injectable()
export class NotesService {
  constructor (private http:Http){}
  
    getNotes() {
      let url = "http://localhost:8090/notes/getlist/" + localStorage.getItem("currentUserName");
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Authorization', 'Bearer ' + localStorage.getItem("token").toString());
      const options = new RequestOptions({headers: headers});
      return this.http.get(url,options);
    }

    getNote(noteId) {
      let url = "http://localhost:8090/notes/get/" + noteId;
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Authorization', 'Bearer ' + localStorage.getItem("token").toString());
      const options = new RequestOptions({headers: headers});
      return this.http.get(url,options);
    }

    addNote(model) {
      let url = "http://localhost:8090/notes/add";
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Authorization', 'Bearer ' + localStorage.getItem("token").toString());
      const options = new RequestOptions({headers: headers});
      return this.http.post(url,JSON.stringify(model),options);
    }

    updateNote(note) {
      let url = "http://localhost:8090/notes/update";
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Authorization', 'Bearer ' + localStorage.getItem("token").toString());
      const options = new RequestOptions({headers: headers});
      return this.http.post(url,JSON.stringify(note),options);
    }

    deleteNote(noteId) {
      let url = "http://localhost:8090/notes/delete/" + noteId;
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Authorization', 'Bearer ' + localStorage.getItem("token").toString());
      const options = new RequestOptions({headers: headers});
      return this.http.delete(url,options);
    }
}
