import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-brand-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './brand-carousel.component.html',
  styleUrl: './brand-carousel.component.scss',
})
export class BrandCarouselComponent {
  public readonly brandLogo: { logo: string, url: string }[]=[
    {
      logo: 'assets/img/brand/01.png',
      url: 'https://eu.louisvuitton.com/eng-e1/homepage',
    },
    {
      logo: 'assets/img/brand/02.png',
      url: 'https://www.balenciaga.com/en-en?srsltid=AfmBOoovwY-6SbVHAK2eLkIeUfQhITGCL-cR1J8imoCNTprPNoazcWew',
    },
    { logo: 'assets/img/brand/03.png', url: 'https://www.dior.com/en_vn' },
    {
      logo: 'assets/img/brand/04.png',
      url: 'https://www.gucci.com/us/en/?srsltid=AfmBOooVlKODDPo-tbNDiiFm1TKc_ZRcTKEd_Wi__b_67i3-a0GG3esj',
    },
    { logo: 'assets/img/brand/05.png', url: 'https://www.ysl.com/en-us' },
  ];
}
