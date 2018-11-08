import { Component,Input, OnInit } from '@angular/core';
import {PostsService} from "../services/posts.service";
import {Post} from "../models/post.model";

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.css']
})
export class PostListComponentComponent implements OnInit {


  posts: any[];
  //@Input() postListArray : any[];

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.posts = this.postsService.posts;
  }



}
