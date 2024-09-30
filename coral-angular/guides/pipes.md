
# Angular Pipes Guide

## Introduction
This document covers the usage of Angular pipes, with a focus on creating custom pipes. Below are examples and exercises to help you learn how to implement and utilize pipes effectively in your Angular applications.

## Built-in Pipes
Angular provides several built-in pipes for common transformations:
- `DatePipe`
- `CurrencyPipe`
- `DecimalPipe`
- `PercentPipe`

## 1. DatePipe
`DatePipe` formats a date value according to locale rules.

### Usage
```angular
{{ date | date: 'shortDate' }}
```

### Parameters
- **format**: Define the date/time format string (e.g., 'shortDate', 'fullDate').
- **timezone**: Specify the timezone (e.g., 'UTC').
- **locale**: Set the locale to be used (e.g., 'en-US').

## 2. CurrencyPipe
`CurrencyPipe` transforms a number to a currency string, formatted according to the locale and currency code.

### Usage
```angular
{{ amount | currency:'USD':true:'4.2-2' }}
```

### Parameters
- **currencyCode**: The ISO 4217 currency code, such as 'USD' for the U.S. Dollar.
- **display**: Whether to show the code, symbol, or name.
- **digitInfo**: String that defines the minimum and maximum number of digits in the integer and fractional parts.

## 3. DecimalPipe
`DecimalPipe` formats a number as text with a decimal point, optionally including a comma to separate thousands.

### Usage
```angular
{{ number | number:'3.1-2' }}
```

### Parameters
- **digitInfo**: Define the format of the number such as minimum integer digits, minimum fraction digits, and maximum fraction digits.

## 4. PercentPipe
`PercentPipe` formats a number as a percentage according to locale rules.

### Usage
```angular
{{ 0.1234 | percent:'2.2-2' }}
```

### Parameters
- **digitInfo**: String that defines the minimum and maximum number of digits in the integer and fractional parts.

## 5. Custom Pipes
Custom pipes can be created to perform specific transformations not covered by Angular's built-in pipes.

### Example 1: Exponent Pipe
This pipe raises a value to a specified power.

```angular
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'exponent' })
export class ExponentPipe implements PipeTransform {
  transform(value: number, exponent: number = 1): number {
    return Math.pow(value, exponent);
  }
}
```

### Usage:
```angular
<p>{{ 2 | exponent:3 }}</p> <!-- Output: 8 -->
```

### Example 2: Filter Pipe
This pipe filters an array of items based on a specified field.

```angular
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filterPipe' })
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string, fieldName: string): any[] {
    if (!items) return [];
    if (!searchText) return items;

    searchText = searchText.toLowerCase();
    return items.filter(it => {
      return it[fieldName].toLowerCase().includes(searchText);
    });
  }
}
```

### Usage:
```angular
<ul>
  <li *ngFor="let item of items | filterPipe:'john':'name'">{{ item.name }}</li>
</ul>
```

## Exercises with Solutions

1. **Capitalize Pipe**: Create a pipe that capitalizes the first letter of each word in a string.

**Solution**:
```angular
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'capitalize' })
export class CapitalizePipe implements PipeTransform {
  transform(input: string): string {
    return input.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }
}
```

2. **Reverse String Pipe**: Create a pipe that reverses the characters in a string.

**Solution**:
```angular
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'reverseStr' })
export class ReverseStringPipe implements PipeTransform {
  transform(value: string): string {
    return value.split('').reverse().join('');
  }
}
```

3. **Truncate String Pipe**: Create a pipe that truncates a string to a specified length and adds an ellipsis if it's longer than the maximum length.

**Solution**:
```angular
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'truncate' })
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit: number = 20, completeWords: boolean = false, ellipsis: string = '...'): string {
    if (completeWords) {
      limit = value.substr(0, limit).lastIndexOf(' ');
    }
    return value.length > limit ? value.substr(0, limit) + ellipsis : value;
  }
}
```

4. **Numeric Format Pipe**: Create a pipe that formats a number into a more readable format with commas as thousands separators.

**Solution**:
```angular
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'numericFormat' })
export class NumericFormatPipe implements PipeTransform {
  transform(value: number): string {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}
```

5. **Conditional Formatter Pipe**: Create a pipe that applies different formatting based on the value of the input. For example, coloring text based on its value.

**Solution**:
```angular
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'conditionalFormatter' })
export class ConditionalFormatterPipe implements PipeTransform {
  transform(value: number): string {
    if (value < 0) {
      return `<span style="color: red;">${value}</span>`;
    } else if (value > 0) {
      return `<span style="color: green;">${value}</span>`;
    }
    return value.toString();
  }
}
```

6. **Join Array Pipe**: Create a pipe that joins elements of an array into a single string with a specified separator.

**Solution**:
```angular
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'joinArray' })
export class JoinArrayPipe implements PipeTransform {
  transform(array: any[], separator: string = ', '): string {
    return array.join(separator);
  }
}
```

7. **Sort Array Pipe**: Create a pipe that sorts an array based on a specified field in ascending or descending order.

**Solution**:
```angular
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'sortArray' })
export class SortArrayPipe implements PipeTransform {
  transform(array: any[], field: string, ascending: boolean = true): any[] {
    return array.sort((a, b) => {
      return ascending ? (a[field] > b[field] ? 1 : -1) : (a[field] < b[field] ? 1 : -1);
    });
  }
}
```

## Conclusion
Custom pipes in Angular allow for flexible data transformations directly within templates. Practicing with these examples and exercises will enhance your ability to create and utilize pipes effectively.
