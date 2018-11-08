import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {PostsService} from "../services/posts.service";
import {Post} from "../models/post.model";


@Component({
  selector: 'app-post-form',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  postForm: FormGroup;


   constructor(private formBuilder: FormBuilder, private postsService: PostsService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      contenu: ['', Validators.required]
    });
  }




  onSavePost() {
    const formValue = this.postForm.value;
    const newPost = new Post(
      formValue['title'],
      formValue['contenu'],
      formValue['loveIts'],
      formValue['created_at']
    );


    this.postsService.addPost(newPost);
    this.router.navigate(['/posts']);
  }




}

