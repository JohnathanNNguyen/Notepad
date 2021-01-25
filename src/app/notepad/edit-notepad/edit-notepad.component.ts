import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NotepadService } from 'src/app/notepad.service';

@Component({
  selector: 'app-edit-notepad',
  templateUrl: './edit-notepad.component.html',
  styleUrls: ['./edit-notepad.component.scss']
})
export class EditNotepadComponent implements OnInit {
  allNotes: [] = [];
  // editNote: string = '';
  beingEdited: number = 0;
  noteBeingEdited: string = this.notepadService.allNotes[this.beingEdited];
  subscription: Subscription = new Subscription;

  constructor(
    private notepadService: NotepadService) {
  }

  ngOnInit(): void {
    this.allNotes = this.notepadService.allNotes
    this.subscription = this.notepadService.startEdit
      .subscribe((index: number) => {
        this.beingEdited = index
        this.noteBeingEdited = this.allNotes[this.beingEdited]
        this.allNotes = this.notepadService.allNotes
      })
  }

  onKeyUp(index: number, newNote: string) {
    this.notepadService.onUpdateNote(index, newNote)
  }

  onAddNote() {
    this.notepadService.addNote('')
  }
}
