import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotepadComponent } from './notepad/notepad.component';
import { NotepadListComponent } from './notepad-list/notepad-list.component';
import { ListPipe } from './list.pipe';
import { EditNotepadComponent } from './notepad/edit-notepad/edit-notepad.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    NotepadComponent,
    NotepadListComponent,
    ListPipe,
    EditNotepadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
