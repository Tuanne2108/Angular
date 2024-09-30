
# Detailed Guide to Angular Directives

## Introduction
This guide provides a deeper look into Angular directives with practical examples relevant to real-world applications.

## Structural Directives
Structural directives alter the layout of the DOM by adding, removing, or manipulating elements dynamically.

### Example 1: *ngIf for Conditional Rendering
Use `*ngIf` to conditionally render parts of your template based on the application state.
```angular
<!-- Display the element only if isLoggedIn is true -->
<div *ngIf="isLoggedIn">
  Logout Button
</div>
```

### Example 2: *ngFor for Rendering Lists
Use `*ngFor` to display lists dynamically based on data.
```angular
<!-- List all users with their usernames -->
<ul>
  <li *ngFor="let user of users">
    {{ user.username }}
  </li>
</ul>
```

### Example 3: *ngSwitch for Multiple Conditions
Use `*ngSwitch` to handle multiple conditions within the template.
```angular
<div [ngSwitch]="user.role">
  <app-admin *ngSwitchCase="'admin'"></app-admin>
  <app-user *ngSwitchCase="'user'"></app-user>
  <app-guest *ngSwitchDefault></app-guest>
</div>
```

## Attribute Directives
Attribute directives change the appearance or behavior of an element, component, or another directive.

### Example 4: ngClass for Dynamic Classes
Use `ngClass` to apply CSS classes dynamically based on conditions.
```angular
<!-- Apply 'active' class based on isActive state -->
<div [ngClass]="{'active': isActive}">
  Active Status
</div>
```

### Example 5: ngStyle for Inline Styles
Use `ngStyle` to apply styles dynamically.
```angular
<!-- Change color based on isOnline status -->
<div [ngStyle]="{'color': isOnline ? 'green' : 'red'}">
  Status Indicator
</div>
```

### Example 6: Custom Tooltip Directive
Create a custom directive to provide tooltips.
```angular
import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective {
  @Input('appTooltip') tooltip: string;

  constructor(private el: ElementRef) {
    this.el.nativeElement.title = this.tooltip;
  }
}
```
Usage:
```angular
<button appTooltip="Click here for more info">Info</button>
```

### Example 7: Custom Visibility Directive
Create a directive that toggles the visibility of elements based on a condition.
```angular
import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHide]'
})
export class HideDirective {
  @Input() set appHide(condition: boolean) {
    this.el.nativeElement.style.display = condition ? 'none' : 'block';
  }

  constructor(private el: ElementRef) {}
}
```
Usage:
```angular
<div [appHide]="!isLoggedIn">
  Please log in to see this content.
</div>
```

## Conclusion
Understanding and leveraging Angular directives effectively can significantly enhance the interactivity and responsiveness of your applications. Practice these examples to master directive usage in your projects.
