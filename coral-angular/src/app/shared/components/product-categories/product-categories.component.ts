import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-product-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-categories.component.html',
  styleUrl: './product-categories.component.scss',
})
export class ProductCategoriesComponent {
  productList = [
    {
      img: 'assets/img/15.png',
      alt: 'Adicolor Classics Joggers',
      type: 'Dress',
      price: '$63.85',
    },
    {
      img: 'assets/img/14.png',
      alt: 'Nike Sportswear Futura',
      type: 'Bag',
      price: '$130.00',
    },
    {
      img: 'assets/img/13.png',
      alt: 'Geometric Print Scarf',
      type: 'Scarf',
      price: '$53.00',
    },
    {
      img: 'assets/img/04.png',
      alt: 'Yellow Reserved Hoodie',
      type: 'Dress',
      price: '$364.00',
    },
    {
      img: 'assets/img/11.png',
      alt: 'Basic Dress Green',
      type: 'Dress',
      price: '$236.00',
    },
    {
      img: 'assets/img/12.png',
      alt: 'Nike Air Zoom Pegasus',
      type: 'Shoes',
      price: '$220.00',
    },
    {
      img: 'assets/img/17.png',
      alt: 'Nike Repel Miler',
      type: 'Dress',
      price: '$120.50',
    },
    {
      img: 'assets/img/16.png',
      alt: 'Nike Sportswear Futura Luxe',
      type: 'Glasses',
      price: '$160.00',
    },
  ];
  filterList = [
    { name: 'All', value: 'all' },
    { name: 'T-Shirt', value: 't-shirt' },
    { name: 'Hoodies', value: 'hoodies' },
    { name: 'Jacket', value: 'jacket' },
  ];
}
