// src/app/imagen-component/imagen-component.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule


export interface Imagen {
  src: string;
  alt: string;
}

@Component({
  selector: 'app-imagen-component',
  standalone: true, 
  imports: [CommonModule], 
  templateUrl: './imagen-component.component.html',
  styleUrls: ['./imagen-component.component.css']
})
export class ImagenComponent {


  public imagenes: Imagen[] = [
    {
      src: 'assets/imagen/img1.png',
      alt: 'Imagen 1'
    },
    {
      src: 'assets/imagen/img2.png',
      alt: 'Imagen 2'
    },
    {
      src: 'assets/imagen/img3.png',
      alt: 'Imagen 3'
    },
    {
      src: 'assets/imagen/img4.png',
      alt: 'Imagen 4'
    },
    {
      src: 'assets/imagen/img5.png',
      alt: 'Imagen 5'
    },
    {
      src: 'assets/imagen/img6.png',
      alt: 'Imagen 6'
    },
    {
      src: 'assets/imagen/img7.png',
      alt: 'Imagen 7'
    },
    {
      src: 'assets/imagen/img8.png',
      alt: 'Imagen 8'
    }
  ];

}