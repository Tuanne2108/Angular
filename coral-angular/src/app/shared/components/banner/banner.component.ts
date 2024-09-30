import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
})
export class BannerComponent {
  banner: any = {
    'heading':'Collections',
    'text':'You Can Explore Ans Shop Many Different Collection From Various Brands Here.',
    'image':'assets/img/19.png'
  }
}
