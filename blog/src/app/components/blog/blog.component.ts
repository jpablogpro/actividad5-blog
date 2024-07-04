import { Component } from '@angular/core';
import { Inoticia } from '../../interfaces/Inoticia.interface';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  
  arrNoticias: Inoticia[] = [
    {
      title: 'noticia 1',
      url: 'url 1',
      text: 'cuerpo de la noticia 1',
      date: '2024-07-01'
    },
    {
      title: 'noticia 2',
      url: 'url 2',
      text: 'cuerpo de la noticia 2',
      date: '2024-07-02'
    }
  ]
}
