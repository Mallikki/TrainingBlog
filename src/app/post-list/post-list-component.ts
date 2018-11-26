import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.html',
  styleUrls: ['./post-list-component.scss']
})
export class PostListComponent implements OnInit {

  @Input()
  postsList: PostListComponent[];

  constructor() { }

  ngOnInit() {

    console.log(this.postsList)
  }

}
