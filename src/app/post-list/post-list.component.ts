import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  @Input() posts: Post[];

  notesVisible: boolean = false;

  toggleNotes() {
    this.notesVisible = !this.notesVisible;
  }
}
