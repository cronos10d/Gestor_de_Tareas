// src/app/imagen-component/imagen-component.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import {  OnInit, OnDestroy } from '@angular/core';


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

export class ImagenComponent implements OnInit, OnDestroy {


  public imagenes: Imagen[] = [
    {
      src: 'assets/imagen/img9.webp',
      alt: 'Imagen 9'
    },
    {
      src: 'assets/imagen/img10.webp',
      alt: 'Imagen 10'
    },
    {
      src: 'assets/imagen/img11.webp',
      alt: ''
    },
    {
      src: 'assets/imagen/img12.webp',
      alt: 'imagen 12'
    },
    {
      src: 'assets/imagen/img13.webp',
      alt: 'imagen 13'
    },
    {
      src: 'assets/imagen/img14.webp',
      alt: 'imagen 14'
    },
    {
      src: 'assets/imagen/img15.webp',
      alt: 'Imagen 15'
    },
    {
      src: 'assets/imagen/img16.webp',
      alt: 'Imagen 16'
    }
  ];

    private onScroll = () => {
    const scrolled = window.scrollY > 8;
    document.documentElement.classList.toggle('scrolled', scrolled);
  };


  ngOnInit(): void {
  window.addEventListener('scroll', this.onScroll, { passive: true });
}

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.onScroll);
  }


}


