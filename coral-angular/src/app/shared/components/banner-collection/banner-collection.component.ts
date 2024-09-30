import { Component } from '@angular/core';

@Component({
  selector: 'app-banner-collection',
  standalone: true,
  imports: [],
  templateUrl: './banner-collection.component.html',
  styleUrl: './banner-collection.component.scss',
})
export class BannerCollectionComponent {
  content = {
    logo: 'assets/img/zara.png',
    image: 'assets/img/brand/Zara_Logo.png',
    description:
      'Lustrous yet understated. The new evening wear collection exclusively offered at the reopened Giorgio Armani boutique in Los Angeles.',
  };
}
