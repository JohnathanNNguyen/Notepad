import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NotepadService } from '../notepad.service';

@Component({
  selector: 'app-notepad-list',
  templateUrl: './notepad-list.component.html',
  styleUrls: ['./notepad-list.component.scss']
})
export class NotepadListComponent implements OnInit, OnDestroy {
  allNotes: any = [];
  selected: number = 0;
  editedNote: string = '';
  subscription: Subscription = new Subscription
  constructor(private notepadService: NotepadService) {
    this.allNotes = this.notepadService.allNotes
  }

  ngOnInit(): void {
    this.subscription = this.notepadService.startEdit
      .subscribe((index: number) => {
        this.selected = this.notepadService.beingEdited
      })
  }

  onAddNote() {
    this.notepadService.addNote('')
  }
  onRemoveNote() {
    this.notepadService.onRemoveNote(this.notepadService.beingEdited)

  }
  onEditNote(i: number) {
    this.notepadService.onEdit(i);
    this.notepadService.startEdit.next(i)
  }
  ngOnDestroy() {
    this.subscription.unsubscribe
  }

}
