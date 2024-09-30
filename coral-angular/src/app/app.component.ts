import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { BannerComponent } from './shared/components/banner/banner.component';
import { BrandCarouselComponent } from './shared/components/brand-carousel/brand-carousel.component';
import { PopularStylesComponent } from './shared/components/popular-styles/popular-styles.component';
import { BestsellersComponent } from './shared/components/bestsellers/bestsellers.component';
import { InstagramNewsletterComponent } from './shared/components/instagram-newsletter/instagram-newsletter.component';
import { ProductCategoriesComponent } from './shared/components/product-categories/product-categories.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { BannerCollectionComponent } from './shared/components/banner-collection/banner-collection.component';
import { NewsletterComponent } from './shared/components/newsletter/newsletter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, BannerComponent, BannerCollectionComponent, BrandCarouselComponent, PopularStylesComponent, BestsellersComponent, InstagramNewsletterComponent, ProductCategoriesComponent, FooterComponent, NewsletterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'coral-angular';
}
