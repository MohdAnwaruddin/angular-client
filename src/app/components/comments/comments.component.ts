import { Component } from '@angular/core';
import { CommentsService, IComment } from '../../services/comments.service';


@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent {
  comments: IComment[] = [];

  constructor(private _commentService: CommentsService) {}
  ngOnInit(): void {
    //get called once the component has been initialized

    this._commentService.getComments().subscribe((data) => (this.comments = data));
  }

}
