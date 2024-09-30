
# Quy tắc viết code chuẩn cho Fresher

## 1. Đặt tên biến và hàm
- **Tên biến và hàm** phải có ý nghĩa, phản ánh đúng vai trò hoặc chức năng.
  - Sử dụng **camelCase** cho tên biến, hàm và phương thức.
  - Sử dụng **PascalCase** cho tên class.
- Tránh sử dụng các tên không rõ ràng như `x`, `y`, `a1`, `test1`, v.v.
  - Ví dụ:
    ```typescript
    // Không nên:
    let a = 5;
    function doSomething() { ... }

    // Nên:
    let studentCount = 5;
    function calculateTotalScore() { ... }
    ```

## 2. Khoảng trắng và thụt lề (Indentation)
- Mỗi block code nên có một khoảng thụt lề rõ ràng (sử dụng **2** hoặc **4 khoảng trắng** hoặc **tab**, tùy vào quy ước dự án).
- Không để các dòng code quá dài, tránh làm người đọc khó hiểu và phải cuộn ngang. Quy tắc thông thường là **không quá 80 ký tự trên mỗi dòng**.
- Sau dấu **,** hoặc **;** và toán tử (như `+`, `-`, `=`, v.v.) cần có 1 khoảng trắng.
  - Ví dụ:
    ```typescript
    // Không nên:
    let total=5+3;

    // Nên:
    let total = 5 + 3;
    ```

## 3. Dấu ngoặc (Braces)
- Luôn mở và đóng dấu ngoặc nhọn `{}` trên cùng một dòng hoặc theo quy ước rõ ràng.
- Dấu mở `{` nên được viết cùng dòng với câu lệnh hoặc điều kiện.
  - Ví dụ:
    ```typescript
    // Nên:
    if (condition) {
      // Code block
    }
    
    // Không nên:
    if (condition)
    {
      // Code block
    }
    ```

## 4. Comment và ghi chú (Documentation)
- Ghi chú phải ngắn gọn, súc tích nhưng đủ để người khác hiểu được code của bạn đang làm gì. 
- Các đoạn code phức tạp cần có ghi chú để giải thích rõ ràng hơn.
- **Comment trên cùng của file** để mô tả chức năng chính của file đó.
  - Ví dụ:
    ```typescript
    /**
     * Hàm này dùng để tính tổng số điểm của sinh viên
     * @param studentScores: Mảng điểm của sinh viên
     * @returns Tổng số điểm
     */
    function calculateTotalScore(studentScores: number[]): number {
      return studentScores.reduce((total, score) => total + score, 0);
    }
    ```

## 5. Tổ chức file và folder
- Các file và folder nên được đặt tên có ý nghĩa, tuân thủ quy tắc nhất quán.
- Mỗi module, component hoặc class nên nằm trong một file riêng biệt.

## 6. Clean code (Code sạch)
- Tránh lặp lại code (DRY - Don't Repeat Yourself).
- Chỉ viết những đoạn code cần thiết, tránh dư thừa.
- Tách các hàm hoặc đoạn code dài thành những hàm nhỏ hơn, dễ quản lý hơn.

## 7. Quy tắc kiểm tra lỗi và xử lý ngoại lệ
- Sử dụng **try-catch** để bắt và xử lý ngoại lệ.
- Luôn luôn kiểm tra các input của người dùng và các giá trị đầu vào của hàm.

    ```typescript
    // Nên:
    function divide(a: number, b: number): number {
      if (b === 0) {
        throw new Error("Không thể chia cho 0");
      }
      return a / b;
    }
    ```

## 8. Theo dõi và sử dụng các best practices
- Sử dụng các best practices của Angular hoặc framework bạn đang làm việc. 
- Tuân thủ theo chuẩn code của dự án hoặc theo hướng dẫn chung của team.
