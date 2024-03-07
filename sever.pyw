import http.server
import socketserver
import socket
import os
import threading
import time

# Tìm địa chỉ IP WiFi của máy chủ
def get_ip_address():
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    s.connect(("8.8.8.8", 80))  # Địa chỉ IP của Google DNS
    ip_address = s.getsockname()[0]
    s.close()
    return ip_address

# Địa chỉ IP của máy chủ
HOST = get_ip_address()

# Cổng mà máy chủ sẽ lắng nghe
PORT_1 = 8000  # Cổng cho việc truy cập tất cả nội dung từ HTML, CSS, JS
PORT_2 = 2206  # Cổng giới hạn chỉ cho HTML và JS
PORT_3 = 1998 
# Thư mục chứa các tệp web
WEB_DIRECTORY = '.'  # Đường dẫn tới thư mục chứa các tệp web (index.html, css, js, vv)

# Tên tệp nhật ký
LOG_FILE = 'access_log.txt'

# Thời gian cập nhật trang web (giây)
UPDATE_INTERVAL = 5

# Biến thời gian cập nhật cuối cùng
last_update_time = time.time()

# Tạo một lớp handler để xử lý yêu cầu HTTP cho PORT_1
class MyHttpRequestHandlerAllContent(http.server.SimpleHTTPRequestHandler):
    # Bổ sung tiêu đề Access-Control-Allow-Origin để cho phép CORS từ tất cả các nguồn
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        http.server.SimpleHTTPRequestHandler.end_headers(self)

    # Ghi lại yêu cầu vào tệp nhật ký
    def log_request(self, code='-', size='-'):
        with open(LOG_FILE, 'a') as f:
            now = time.strftime('%Y-%m-%d %H:%M:%S')
            f.write(f'{now} - {self.client_address[0]} - {self.requestline}\n')
        http.server.SimpleHTTPRequestHandler.log_request(self, code, size)

# Tạo một lớp handler để xử lý yêu cầu HTTP cho PORT_2
class MyHttpRequestHandlerLimitedHTMLJS(http.server.SimpleHTTPRequestHandler):
    # Bổ sung tiêu đề Access-Control-Allow-Origin để cho phép CORS từ tất cả các nguồn
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        http.server.SimpleHTTPRequestHandler.end_headers(self)

    # Ghi lại yêu cầu vào tệp nhật ký
    def log_request(self, code='-', size='-'):
        with open(LOG_FILE, 'a') as f:
            now = time.strftime('%Y-%m-%d %H:%M:%S')
            f.write(f'{now} - {self.client_address[0]} - {self.requestline}\n')
        http.server.SimpleHTTPRequestHandler.log_request(self, code, size)

    # Chỉ cho phép truy cập vào các tệp HTML và JS
    def translate_path(self, path):
        root = os.getcwd()
        path = path.split('?',1)[0]
        path = path.split('#',1)[0]
        path = os.path.normpath(path)
        words = path.split('/')
        words = filter(None, words)
        path = root
        for word in words:
            if os.path.dirname(word) or word in (os.curdir, os.pardir):
                continue
            if word.endswith('.html') or word.endswith('.js'):
                path = os.path.join(path, word)
            else:
                return None  # Trả về None nếu yêu cầu truy cập không hợp lệ
        return path

# Hàm cập nhật trang web
def update_website():
    global last_update_time
    while True:
        current_time = time.time()
        if current_time - last_update_time > UPDATE_INTERVAL:
            os.system("your_update_command_here")  # Thay bằng lệnh cập nhật trang web của bạn
            last_update_time = current_time
        time.sleep(1)  # Ngủ 1 giây để tránh chạy quá nhiều

# Tạo một luồng riêng để cập nhật trang web
update_thread = threading.Thread(target=update_website)
update_thread.daemon = True
update_thread.start()

# Tạo một lớp handler để xử lý yêu cầu HTTP cho PORT_1
httpd_1 = socketserver.TCPServer((HOST, PORT_1), MyHttpRequestHandlerAllContent)

# Tạo một lớp handler để xử lý yêu cầu HTTP cho PORT_2
httpd_2 = socketserver.TCPServer((HOST, PORT_2), MyHttpRequestHandlerLimitedHTMLJS)

# In thông báo cho cả hai máy chủ
print("Serving at", HOST)

# Thiết lập thư mục gốc cho máy chủ PORT_1
os.chdir(WEB_DIRECTORY)
    
# Bắt đầu lắng nghe yêu cầu từ client cho PORT_1
httpd_1_thread = threading.Thread(target=httpd_1.serve_forever)
httpd_1_thread.daemon = True
httpd_1_thread.start()

# Thiết lập thư mục gốc cho máy chủ PORT_2
os.chdir(WEB_DIRECTORY)
    
# Bắt đầu lắng nghe yêu cầu từ client cho PORT_2
httpd_2_thread = threading.Thread(target=httpd_2.serve_forever)
httpd_2_thread.daemon = True
httpd_2_thread.start()

# Chờ các luồng hoạt động
httpd_1_thread.join()
httpd_2_thread.join()
