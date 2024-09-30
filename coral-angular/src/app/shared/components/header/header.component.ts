import { Component, ViewEncapsulation  } from '@angular/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@Component({
  selector   : 'app-header',
  standalone : true,
  imports    : [NgbCollapseModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl   : './header.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {
  public readonly logoImage: string = 'assets/img/logo.png';
  public readonly navLink: { name: string, url: string }[] = [
    { 'name': 'Jewelry & Accessories', 'url': '' },
    { 'name': 'Clothing & Shoes', 'url': '' },
    { 'name': 'Home & Living', 'url': '' },
    { 'name': 'Wedding & Party', 'url': '' },
    { 'name': 'Toys & Entertainment', 'url': '' },
    { 'name': 'Art & Collectibles', 'url': '' },
    { 'name': 'Craft Supplies & Tools', 'url': '' }
  ];

  public isCollapsed: boolean = false;

  constructor() {}

  trackByFn(index: number, item: { name: string; url: string }): number {
    return index;
  }
}
