import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class NotepadService {
  updateNotes = new Subject<[]>();
  startEdit = new Subject<number>();
  beingEdited: number = 0;
  allNotes: any = [];



  addNote(note: string) {
    this.allNotes.push(note)
    this.beingEdited = this.allNotes.lastIndexOf(note)
    this.updateNotes.next(this.allNotes)
    this.startEdit.next(this.allNotes.lastIndexOf(note))
  }
  onRemoveNote(i: number) {
    this.allNotes.splice(i, 1)
    this.startEdit.next(0)
    this.allNotes.slice()
  }
  onEdit(index: number) {
    this.beingEdited = index
    this.startEdit.next(index)
  }
  onUpdateNote(index: number, newNote: any) {
    this.allNotes[index] = newNote
    this.updateNotes.next(this.allNotes[index])
    this.allNotes.slice()
  }

}
