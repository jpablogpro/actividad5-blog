import { Component, ViewEncapsulation } from '@angular/core';
import { Inoticia } from '../../interfaces/Inoticia.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class BlogComponent {
  
  newNoticia: Inoticia = { title: "", url: "", text: "", date: ""}
  arrNoticias: Inoticia[] = [
    {
      title: 'La selección española se clasifica para las semifinales de la Eurocopa',
      url: 'images/seleccion.jpeg',
      text: `Partido épico en estos cuartos de final, con un triunfo de España con goles de dos suplentes, Olmo y Merino. España pasa a las semifinales y jubila a Kroos. Histórica victoria ante Alemania por 2-1. 
      Partidazo de Olmo, que metió el gol de España y después fue capaz de dar un pase de gol fantástico a Merino. Además, Olmo fue el único jugador de España que supo jugar la prórroga. España jugará la semifinal de la Eurocopa el próximo martes, a las 21.00 horas, después de un maravilloso partido en el que ha derrotado a Alemania.`,
      date: '2024-07-06'
    },
    {
      title: 'Pamplona da la bienvenida a los Sanfermines 2024 con un chupinazo multitudinario',
      url: 'images/sanfermines.jpeg',
      text: `Pamplona ha estallado en una fiesta de color blanco y rojo tras el lanzamiento, al mediodía de este sábado, del chupinazo que ha dado inicio a los Sanfermines 2024, que se prolongarán, como es tradición, hasta el 14 de julio.
      Pamplonesas, pamploneses, ¡Viva San Fermín!, ¡Gora San Fermín!", han proclamado desde el balcón del Ayuntamiento tres representantes del grupo de danza Duguna, que en el año de su 75 aniversario ha sido la candidatura más votada de las cinco promovidas por la Mesa de San Fermín.`,
      date: '2024-07-06'
    }
  ]

  guardarnoticia() {
    if (this.newNoticia.title === "" || this.newNoticia.date === "" ||
        this.newNoticia.text === "" || this.newNoticia.url === "") {
          if (this.newNoticia.date === "") {
            let titleTMP = this.newNoticia.title 
            this.newNoticia.title = "Falta introducir la fecha de publicacion"
            setTimeout(() => { this.newNoticia.title = titleTMP }, 500)
          } 
          if (this.newNoticia.title === "") {
            this.newNoticia.title = "Falta introducir el titulo"
            setTimeout(() => { this.newNoticia.title = "" }, 2500)
          } 
          if (this.newNoticia.text === "") {
            this.newNoticia.text = "Falta introducir el texto de la noticia"
            setTimeout(() => { this.newNoticia.text = "" }, 2500)
          } 
          if (this.newNoticia.url === "") {
            this.newNoticia.url = "Falta introducir el url de la imagen"
            setTimeout(() => { this.newNoticia.url = "" }, 2500)
          }
        }
    else {
      this.arrNoticias.push(this.newNoticia);
      this.newNoticia = { title: "", url: "", text: "", date: ""}
    }
  }

  cargarNoticias(): string {
    let html: string = "";
    this.arrNoticias.slice(2).forEach((noticia: Inoticia) => {
      html += `<li class="li-news"><h4>${noticia.title}</h4>
               <div>${noticia.date}</div><p>${noticia.text}</p>
               <img src="${noticia.url}" alt="${noticia.title}" />
               <hr /></li>`;
    })    
    return html;
  }
}
