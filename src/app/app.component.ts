import { Component, OnInit } from '@angular/core';
import {PostsService} from "./services/posts.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isAuth = false;
  posts: any[];


  constructor(private postsService: PostsService) {
      setTimeout(
        () => {
          this.isAuth = true;
        }, 2000
      );
    }

  ngOnInit() {
    this.posts = this.postsService.posts;
  }
}
