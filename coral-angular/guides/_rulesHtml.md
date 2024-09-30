
# Hướng dẫn tổ chức file HTML trong dự án Angular

Trong Angular, việc tổ chức các file HTML là cực kỳ quan trọng để đảm bảo mã dễ đọc, dễ bảo trì và dễ mở rộng. Dưới đây là một số quy tắc và hướng dẫn về cách tổ chức các file HTML cho dự án Angular.

## 1. **Chia nhỏ template theo component**
- Mỗi component nên có một file HTML riêng biệt, để dễ quản lý.
- Các template lớn hoặc phức tạp nên được chia thành nhiều thành phần con để giảm thiểu sự phức tạp và tăng tính tái sử dụng.

  Ví dụ:
  ```
  src/
  ├── app/
  │   ├── components/
  │   │   ├── header/
  │   │   │   ├── header.component.ts
  │   │   │   ├── header.component.html
  │   │   │   └── header.component.scss
  │   │   ├── footer/
  │   │   │   ├── footer.component.ts
  │   │   │   ├── footer.component.html
  │   │   │   └── footer.component.scss
  │   │   └── ...
  ```

## 2. **Sử dụng cú pháp Angular template chuẩn**
- Sử dụng các chỉ thị (`directives`) và ràng buộc (`binding`) của Angular để tối ưu hóa mã HTML và tránh lặp code.

  Ví dụ:
  ```html
  <!-- Không nên: -->
  <div>{{ user.name }}</div>
  <div>{{ user.email }}</div>

  <!-- Nên: -->
  <div *ngFor="let user of users">
    <div>{{ user.name }}</div>
    <div>{{ user.email }}</div>
  </div>
  ```

## 3. **Sử dụng tên class có ý nghĩa**
- Đặt tên class CSS trong HTML phải rõ ràng, dễ hiểu và tuân theo chuẩn BEM (Block Element Modifier) nếu có thể.
  - Block: Đại diện cho một thành phần độc lập.
  - Element: Thành phần con của Block.
  - Modifier: Dùng để thay đổi cách thể hiện của Block hoặc Element.

  Ví dụ:
  ```html
  <!-- Không nên: -->
  <div class="header"></div>

  <!-- Nên: -->
  <div class="header__nav"></div>
  <div class="header__logo"></div>
  <div class="header__menu--active"></div>
  ```

## 4. **Không nên lạm dụng id trong HTML**
- Tránh sử dụng `id` trong HTML trừ khi thật sự cần thiết, thay vào đó hãy dùng `class`. Vì `id` có tính duy nhất và chỉ nên được sử dụng khi chắc chắn rằng không có thành phần nào khác cần dùng cùng id.

  Ví dụ:
  ```html
  <!-- Không nên: -->
  <div id="header"></div>

  <!-- Nên: -->
  <div class="header"></div>
  ```

## 5. **Cách sử dụng Interpolation và Property Binding**
- Sử dụng interpolation (`{{}}`) khi chỉ cần hiện giá trị, và sử dụng property binding (`[]`) khi muốn ràng buộc thuộc tính.

  Ví dụ:
  ```html
  <!-- Interpolation để hiển thị dữ liệu -->
  <h1>{{ title }}</h1>

  <!-- Property binding để ràng buộc thuộc tính -->
  <img [src]="imageUrl" alt="Hình ảnh">
  ```

## 6. **Quy tắc khoảng trắng và thụt lề (Indentation)**
- Mỗi dòng mã HTML nên được thụt lề hợp lý để dễ đọc và duy trì. Sử dụng **2 khoảng trắng** hoặc **4 khoảng trắng** tùy vào quy định của dự án.
- Không để các dòng HTML quá dài, nên ngắt dòng khi cần thiết.

  Ví dụ:
  ```html
  <!-- Không nên: -->
  <div><span>{{ user.name }}</span><span>{{ user.email }}</span></div>

  <!-- Nên: -->
  <div>
    <span>{{ user.name }}</span>
    <span>{{ user.email }}</span>
  </div>
  ```

## 7. **Tái sử dụng và chia sẻ code bằng Angular directives**
- Sử dụng Angular directives (`ngIf`, `ngFor`, `ngClass`, v.v.) để tái sử dụng và giảm thiểu code dư thừa.

  Ví dụ:
  ```html
  <div *ngIf="isVisible">
    Nội dung chỉ hiển thị khi isVisible là true.
  </div>
  
  <ul>
    <li *ngFor="let item of items">{{ item }}</li>
  </ul>
  ```

## 8. **Đảm bảo tính dễ hiểu của template**
- Code trong các file HTML phải rõ ràng, dễ hiểu và tránh lồng ghép quá nhiều logic phức tạp vào trong template.

## 9. **Sử dụng templateUrl thay vì viết HTML trực tiếp trong template**
- Tránh viết HTML trực tiếp trong file TypeScript (sử dụng thuộc tính `template`), thay vào đó hãy sử dụng `templateUrl` để tách biệt rõ ràng giữa logic và giao diện.

  Ví dụ:
  ```typescript
  @Component({
    selector: 'app-header',
    templateUrl: './header.component.html',  // Sử dụng file HTML riêng
    styleUrls: ['./header.component.scss']
  })
  export class HeaderComponent { }
  ```

## 10. **Đảm bảo tính khả chuyển và tái sử dụng (Modularity)**
- Các thành phần HTML nên được thiết kế để có thể tái sử dụng ở nhiều nơi trong ứng dụng.
- Tránh lặp lại các đoạn mã giống nhau ở nhiều nơi trong dự án.

---
Việc tổ chức các file HTML trong Angular rất quan trọng để giúp dự án dễ duy trì, mở rộng và đảm bảo tính nhất quán trong suốt quá trình phát triển.
