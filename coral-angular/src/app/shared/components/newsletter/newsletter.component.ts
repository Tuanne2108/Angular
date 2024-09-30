import { Component } from '@angular/core';
import { ProductCategoriesComponent } from "../product-categories/product-categories.component";

@Component({
  selector: 'app-newsletter',
  standalone: true,
  imports: [ProductCategoriesComponent],
  templateUrl: './newsletter.component.html',
  styleUrl: './newsletter.component.scss'
})
export class NewsletterComponent {

}
