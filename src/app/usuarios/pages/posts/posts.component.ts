import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { User } from '../../interfaces/usuario.interface';
import { Post } from '../../interfaces/posts.interface';
import { UsuarioService } from '../../services/usuario.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit, OnChanges {

  @Input() user!: User;

  posts: Post[] = [];

  constructor(
    private uService: UsuarioService
  ) { }
  
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.user.currentValue != changes.user.previousValue) {
      this.user = changes.user.currentValue[0];

      this.uService.getPosts(this.user.id)
      .subscribe( posts => {
        this.posts = posts
        console.log(this.posts)
      })
    }
  }
  
  ngOnInit(): void {
  }

}
