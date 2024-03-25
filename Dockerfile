# Sử dụng image base phù hợp với ứng dụng của bạn (ví dụ: Node.js, Python, etc.)
FROM node:latest 

# Thiết lập thư mục làm việc của container
WORKDIR /app 

# Sao chép mã nguồn từ thư mục cục bộ vào container
COPY . .

# Cài đặt các dependencies
RUN npm install 

# Thiết lập lệnh mặc định khi container chạy
CMD ["npm", "start"]
