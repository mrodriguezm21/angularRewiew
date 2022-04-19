import { Component, OnInit } from '@angular/core';
import { ApiUseService } from 'src/app/services/api-use.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  constructor(private post: ApiUseService) {}
  ngOnInit(): void {}

  form = new FormGroup({
    title: new FormControl('', [Validators.required]),
    body: new FormControl('', [Validators.required]),
    userId: new FormControl('', [Validators.min(1), Validators.max(100)]),
  });

  addPost() {
    this.post.addPost(this.form.value).subscribe((post) => {
      console.log(post);
    });
  }
}
