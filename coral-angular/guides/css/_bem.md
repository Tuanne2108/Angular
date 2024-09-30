
# Quy tắc đặt tên class theo BEM (Block Element Modifier)

BEM là viết tắt của **Block Element Modifier**. Đây là một phương pháp đặt tên class trong CSS nhằm giúp mã nguồn dễ đọc, duy trì, và mở rộng hơn.

## 1. **Khái niệm chính trong BEM**
- **Block**: Một thành phần độc lập (block) có thể tồn tại độc lập và được sử dụng lại nhiều lần trong dự án.
- **Element**: Thành phần con của block, không thể tồn tại độc lập mà phụ thuộc vào block.
- **Modifier**: Biến thể của block hoặc element, thường được sử dụng để biểu diễn trạng thái hoặc thay đổi cách thể hiện.

### 2. **Cấu trúc tên class theo BEM**
- **Block**: Được đặt tên theo chức năng của thành phần.
  ```
  .block {
    /* Styles cho block */
  }
  ```
- **Element**: Kết hợp giữa tên block và tên element, phân tách bằng 2 dấu gạch dưới `__`.
  ```
  .block__element {
    /* Styles cho element thuộc block */
  }
  ```
- **Modifier**: Kết hợp giữa tên block/element và tên modifier, phân tách bằng 2 dấu gạch ngang `--`.
  ```
  .block--modifier {
    /* Styles cho biến thể của block */
  }

  .block__element--modifier {
    /* Styles cho biến thể của element */
  }
  ```

### 3. **Ví dụ về BEM**
#### Ví dụ 1: Tổ chức class cho một component `card`
```html
<div class="card">
  <div class="card__header">Tiêu đề</div>
  <div class="card__body">Nội dung</div>
  <div class="card__footer">Chân trang</div>
</div>
```
- `card`: Block chính đại diện cho thành phần thẻ.
- `card__header`: Element đại diện cho tiêu đề của thẻ.
- `card__body`: Element đại diện cho phần nội dung.
- `card__footer`: Element đại diện cho phần chân trang.

#### Ví dụ 2: Sử dụng Modifier cho block và element
```html
<div class="button button--primary">
  <span class="button__text button__text--bold">Nhấn vào</span>
</div>
```
- `button--primary`: Modifier biến đổi button thành loại "primary".
- `button__text--bold`: Modifier biến đổi element text thành dạng "bold".

### 4. **Quy tắc đặt tên trong BEM**
1. **Block**:
   - Tên block phải ngắn gọn và có ý nghĩa rõ ràng.
   - Block không nên quá cụ thể để có thể tái sử dụng trong các ngữ cảnh khác nhau.
   - Ví dụ:
     ```html
     <div class="menu"></div>
     <div class="header"></div>
     ```
   
2. **Element**:
   - Element phải được gắn liền với block mà nó thuộc về.
   - Sử dụng `__` để phân tách giữa block và element.
   - Ví dụ:
     ```html
     <div class="menu__item"></div>
     <div class="header__logo"></div>
     ```

3. **Modifier**:
   - Modifier được sử dụng để điều chỉnh block hoặc element, thể hiện trạng thái, kiểu dáng hoặc kích thước.
   - Sử dụng `--` để phân tách block/element với modifier.
   - Ví dụ:
     ```html
     <div class="menu menu--active"></div>
     <div class="header__logo header__logo--large"></div>
     ```

### 5. **Một số lưu ý khi sử dụng BEM**
- **Không lồng ghép quá nhiều cấp trong BEM**: Tránh lồng ghép quá sâu giữa block và element để mã dễ duy trì.
  ```html
  <!-- Không nên: -->
  <div class="card__header__title"></div>

  <!-- Nên: -->
  <div class="card__header">
    <div class="card__title"></div>
  </div>
  ```
- **Chỉ sử dụng modifier khi cần**: Modifier chỉ nên được sử dụng khi có sự thay đổi cụ thể về kiểu dáng hoặc trạng thái.
  ```html
  <!-- Không nên: -->
  <div class="card__header card__header--default"></div>

  <!-- Nên: -->
  <div class="card__header"></div>
  ```

### 6. **Tóm tắt các quy tắc BEM**
- **Block**: Đại diện cho thành phần độc lập.
- **Element**: Thành phần phụ thuộc của block, phân tách bằng `__`.
- **Modifier**: Biến thể của block hoặc element, phân tách bằng `--`.

BEM giúp tổ chức CSS một cách nhất quán, dễ duy trì và tái sử dụng, đặc biệt khi làm việc trên các dự án lớn hoặc với nhiều người cùng tham gia.
