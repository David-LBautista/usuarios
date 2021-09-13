import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

//!Interfaces
import { User } from '../../interfaces/usuario.interface';
import { Post } from '../../interfaces/posts.interface';

//! Servicios
import { UsuarioService } from '../../services/usuario.service';

//!Material
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit, OnChanges {

  @Input() user!: User;

  posts: Post[] = [];

  constructor(
    private uService: UsuarioService,
    private _snackBar: MatSnackBar
  ) { }
  
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.user.currentValue != changes.user.previousValue) {
      this.user = changes.user.currentValue[0];

      this.uService.getPosts(this.user.id)
      .subscribe( posts => {
        this.posts = posts
      })
    }
  }
  
  ngOnInit(): void {
  }

  eliminar(post:Post, i:number){
    //! Removerlo del UI
    this.posts.splice(i, 1)
    this.mostrarSnackbar('Registro eliminado...')

    //!Removerlo de la API
    this.uService.deletePost(post.id)
      .subscribe( resp => console.log(resp))
  }

  mostrarSnackbar(mensaje:string){
    this._snackBar.open(mensaje, 'ok!',{
      duration: 2500,
    })
  }

}
