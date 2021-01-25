import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditNotepadComponent } from './notepad/edit-notepad/edit-notepad.component';
import { NotepadComponent } from './notepad/notepad.component';

const routes: Routes = [
  {
    path: '', component: NotepadComponent, children: [
      { path: ':id', component: EditNotepadComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
