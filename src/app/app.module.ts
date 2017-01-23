import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { routing } from './app.routing';
import { PostListComponent } from './post-list/post-list.component';
import { NoteListComponent } from './note-list/note-list.component';
import { BoardPipe } from './board.pipe';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    PostListComponent,
    NoteListComponent,
    BoardPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
