import { Component, OnInit, Input, Output, EventEmitter, OnDestroy} from '@angular/core';
import { PostModel } from '../models/post-model';




@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, OnDestroy {

  @Input() post: PostModel
  @Output() onRemove = new EventEmitter<number>()

  deletePost() {
    console.log('from Post')
    this.onRemove.emit(this.post.id)
  }

  ngOnInit() {
    console.log('ngOnInit')
  }

  ngOnDestroy() {
    console.log('ngOnDestroy')
  }

}
