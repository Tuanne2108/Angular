import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-popular-styles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './popular-styles.component.html',
  styleUrl: './popular-styles.component.scss',
})
export class PopularStylesComponent {
  public readonly imageList: { img: string, alt: string }[] = [
    { img: 'assets/img/18.png', alt: 'main image' },
    { img: 'assets/img/01.png', alt: 'sub image 1' },
    { img: 'assets/img/02.png', alt: 'sub image 2' },
    { img: 'assets/img/03.png', alt: 'sub image 3' },
    { img: 'assets/img/20.png', alt: 'sub image 4' },
  ];
}
