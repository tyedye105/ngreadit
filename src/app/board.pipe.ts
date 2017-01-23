import { Pipe, PipeTransform } from '@angular/core';
import { Post } from './post.model';

@Pipe({
  name: 'board'
})
export class BoardPipe implements PipeTransform {
  transform(posts: Post[], boardName): any {
    return posts.filter(post => post.board === boardName);
  }
}
