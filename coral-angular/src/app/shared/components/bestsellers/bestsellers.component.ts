import { Component } from '@angular/core';
import { ProductCategoriesComponent } from "../product-categories/product-categories.component";

@Component({
  selector: 'app-bestsellers',
  standalone: true,
  imports: [ProductCategoriesComponent],
  templateUrl: './bestsellers.component.html',
  styleUrl: './bestsellers.component.scss'
})
export class BestsellersComponent {

}
