import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-instagram-newsletter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './instagram-newsletter.component.html',
  styleUrl: './instagram-newsletter.component.scss',
})
export class InstagramNewsletterComponent {
  imageList = [
    { img: 'assets/img/06.png', alt: 'jumping girl' },
    { img: 'assets/img/07.png', alt: 'handbag' },
    { img: 'assets/img/09.png', alt: 'white watch' },
    { img: 'assets/img/05.png', alt: 'man with side part hair' },
    { img: 'assets/img/08.png', alt: 'white dress' },
    { img: 'assets/img/10.png', alt: 'gold watch' },
  ];
}
