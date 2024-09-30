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
  host       : {
    'class': 'component-header'
  }
})
export class HeaderComponent {
  public readonly logoImage: string = 'assets/img/logo.png';
  public readonly navLink  : string[] = [ // @todo1: Menu thì phải có text và có link, em tổ chức lại biến navLink thành object {title: '....', link: '...'}
    'Jewelry & Accessories',
    'Clothing & Shoes',
    'Home & Living',
    'Wedding & Party',
    'Toys & Entertainment',
    'Art & Collectibles',
    'Craft Supplies & Tools',
  ];

  public isCollapsed: boolean = false;

  constructor() {}

  trackByFn(index: number, item: string): number {
    return index;
  }
}
