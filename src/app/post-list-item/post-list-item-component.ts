import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.html',
  styleUrls: ['./post-list-item-component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input()
    post: PostListItemComponent;

  title: string;
  contents: string;
  loveIts: number;
  created_at: Date;

  constructor() { }

  ngOnInit() {
    this.title=this.post.title;
    this.contents=this.post.contents;
    this.loveIts=this.post.loveIts;
    this.created_at=this.post.created_at;
  }

  public like(){
    this.loveIts += 1;
  }

  public dislike(){
    this.loveIts -= 1;
  }

  public getLikes():number{
    return this.loveIts;
  }
}
