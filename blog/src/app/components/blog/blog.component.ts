import { Component } from '@angular/core';
import { Inoticia } from '../../interfaces/Inoticia.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  
  newNoticia: Inoticia = { title: "", url: "", text: "", date: ""}
  arrNoticias: Inoticia[] = [
    {
      title: 'La selección española se clasfica para las semifinales de la Eurocopa',
      url: 'images/seleccion.jpeg',
      text: `Pedía a gritos España los penaltis, sangraba, dolorida, maltrecha,
        achatada primero por unos cambios desafortunados y después por una
        máquina de armar ruido, Alemania, a la que con empujones y centros le
        bastó para acariciar las semifinales. Pedía a gritos España los
        penaltis, suplicaba por ellos, boqueando tras un ejercicio de
        supervivencia en la prórroga, olvidada una primera hora más que
        aceptable. Pedía a gritos España los penaltis, herida de muerte ante un
        rival enfebrecido, donde hasta Toni Kroos, triste adiós el suyo debiendo
        estar en el vestuario antes de tiempo, aguantaba los gemelos en la boca.
        Pedía España a gritos los penaltis cuando Dani Olmo, el mejor, encontró
        milagrosamente la cabeza de Mikel Merino, que remató de forma
        inverosímil una pelota maravillosa para sepultar a la anfitriona por
        primera vez en la historia, primero, y disparar, después, el sueño de
        España, que pedía a gritos los penaltis, que rogaba por ellos, que
        imploraba por ellos, pero que estará en semifinales tras una tarde
        inolvidable y agónica en Stuttgart, donde incluso el árbitro se inhibió
        en una mano de Cururella que tenía toda la pinta de penalti.`,
      date: '2024-07-06'
    },
    {
      title: 'Pamplona da la bienvenida a los Sanfermines 2024 con un chupinazo multitudinario',
      url: 'images/sanfermines.jpeg',
      text: `Amaneció nublado el cielo, húmedo el clima, con las muescas en el suelo
        de la formidable tormenta que sacudió Pamplona la noche anterior. Las
        cuadrillas de veteranos y noveles caminaban temprano por las calles
        camino del almuerzo, la tradición y el entusiasmo. Huevos con jamón y
        chistorra, magras con tomate, platos de ajoarriero, manitas y otros
        excesos para la colesterolemia a modo de precalentamiento de la jornada.
        Es un modo invariable de celebración el sanferminero, el orden en el
        caos, la fiesta al límite, la vida a muerte y la muerte a risa. Cuando
        quedaban 120 minutos para descorchar 204 horas de éxtasis
        ininterrumpido, los uniformes blancos esperaban la unción del pañuelico
        rojo bautizándose de vino. Las mesas kilométricas se prolongaban por las
        distintas calles de la ciudad como la imagen presentida de la fiesta
        infinita.`,
      date: '2024-07-06'
    }
  ]

  guardarnoticia() {
    this.arrNoticias.push(this.newNoticia);
    console.log(this.arrNoticias)
    this.newNoticia = { title: "", url: "", text: "", date: ""}
  }
}
