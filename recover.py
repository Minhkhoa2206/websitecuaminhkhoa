import json
import re

dictionary = {}

# Mở file ở chế độ đọc với mã hóa 'utf-8'
with open('data.txt', 'r', encoding='utf-8') as file:
    lines = file.readlines()

    for i, line in enumerate(lines, start=1):
        try:
            # Sử dụng biểu thức chính quy để tách từ, phát âm và nghĩa
            match = re.match(r'(.*) /(.*)/: (.*)', line.strip())
            if match:
                # Lấy từ, phát âm và nghĩa từ kết quả
                word = match.group(1).strip()
                pronunciation = match.group(2).strip()
                meaning = match.group(3).strip()

                # Thêm vào từ điển
                dictionary[word] = {
                    "pronunciation": pronunciation,
                    "meaning": meaning
                }
            else:
                print(f"Định dạng không hợp lệ ở dòng {i}: {line.strip()}")
        except Exception as e:
            print(f"Lỗi khi xử lý dòng {i}: {e}")

# Ghi từ điển vào 'data1.txt'
with open('data1.js', 'w', encoding='utf-8') as file:
    file.write("var dictionary = ")
    json.dump(dictionary, file, ensure_ascii=False)
