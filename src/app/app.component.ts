import { Component } from '@angular/core';
import { PostModel } from 'src/app/models/post-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts: PostModel[] = [
    {title: 'Man of Few Words', text: 'A person who does not speak a great deal; someone who talks with as few words as possible.', id: 1},
    {title: 'Keep Your Shirt On', text: 'Keeping calm. Usually said by someone who is trying to avoid making others upset.', id: 2},
    {title: 'Eat My Hat', text: 'Having confidence in a specific outcome; being almost sure about something.'}
  ]

  updatePosts(post: PostModel){
    console.log(post);
    this.posts.unshift(post);
  }

  removePost(id: number) {
    console.log('from App')
    this.posts = this.posts.filter(p => p.id != id)
  }

}
