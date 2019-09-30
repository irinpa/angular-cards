import { Component, OnInit, Output, EventEmitter, ElementRef, ViewChild} from '@angular/core';
import { PostModel } from '../models/post-model';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  @ViewChild ('inputFocus', {static: true}) inputRef: ElementRef

  @Output() onAdd: EventEmitter<PostModel> = new EventEmitter<PostModel>()

  title = ''
  text = ''

  constructor() { }

  ngOnInit() {
    this.setFocus()
  }

  addPost() {
    if(this.title.trim() && this.text.trim()) {
      const post: PostModel = {
        title: this.title,
        text: this.text,
      }

      this.onAdd.emit(post)
      console.log('new post', post)

      this.title = this.text = ''
    }
  }

  setFocus()
 {
   this.inputRef.nativeElement.focus()
  }
}
