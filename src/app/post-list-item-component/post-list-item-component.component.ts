import { Component,Input, OnInit } from '@angular/core';
import {PostsService} from "../services/posts.service";
import {Post} from "../models/post.model";
import {Subscription} from "../../../node_modules/rxjs/internal/Subscription";
import {Router } from '@angular/router';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.css']
})
export class PostListItemComponentComponent implements OnInit {
  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postDate: Date;
  @Input() postIndex: number;

  posts: Post[];
  postSubscription: Subscription;

  constructor(private postsService: PostsService, private router: Router) { }

  ngOnInit() {
    this.postSubscription = this.postsService.postsSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.postsService.emitPostsSubject();
  }

  onIncrease() {
    this.postsService.increase(this.postIndex);
  }

  onDecrease() {
    this.postsService.decrease(this.postIndex);
  }


  onDeletePost() {
    this.postsService.removePost(this.postIndex);
  }

  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }

}
