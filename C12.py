import sys
from PyQt5.QtWidgets import QApplication, QMainWindow, QAction, QFileDialog, QTableWidget, QTableWidgetItem, QVBoxLayout, QWidget, QPushButton, QMessageBox

import pandas as pd

class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        self.initUI()
        self.df = None
        self.sub_window = None

    def initUI(self):
        self.setWindowTitle('Hiển thị và Lọc dữ liệu từ tệp Excel')
        self.resize(800, 600)

        self.createMenu()
        self.createButton()
        self.createTables()

    def createMenu(self):
        menubar = self.menuBar()
        fileMenu = menubar.addMenu('Tệp')

        openAction = QAction('Mở', self)
        openAction.triggered.connect(self.openFile)
        fileMenu.addAction(openAction)

    def createButton(self):
        self.button = QPushButton('Lọc Dữ Liệu')
        self.button.clicked.connect(self.filterData)
        self.button.setEnabled(False)  # Bắt đầu bằng việc vô hiệu hóa nút lọc

        layout = QVBoxLayout()
        layout.addWidget(self.button)

        self.layout = layout
        self.container = QWidget()
        self.container.setLayout(self.layout)
        self.setCentralWidget(self.container)

    def createTables(self):
        self.tableWidget = QTableWidget()
        self.setCentralWidget(self.tableWidget)

    def openFile(self):
        options = QFileDialog.Options()
        file_path, _ = QFileDialog.getOpenFileName(self, "Mở tệp Excel", "", "Tệp Excel (*.xlsx *.xls)", options=options)
        if file_path:
            try:
                self.df = pd.read_excel(file_path)
                self.populateTable()
                self.button.setEnabled(True)  # Kích hoạt nút lọc sau khi đã nạp dữ liệu
            except Exception as e:
                self.showMessageBox("Lỗi", f"Có lỗi xảy ra: {str(e)}")

    def filterData(self):
        if self.df is None:
            return

        # Kiểm tra xem cửa sổ con đã được tạo và hiển thị chưa
        if not self.sub_window or not self.sub_window.isVisible():
            self.sub_window = SubWindow(self.df)
            self.sub_window.show()

    def populateTable(self):
        if self.df is None:
            return

        columns = self.df.columns
        self.tableWidget.setColumnCount(len(columns))
        self.tableWidget.setHorizontalHeaderLabels(columns)

        self.tableWidget.setRowCount(self.df.shape[0])
        for i in range(self.df.shape[0]):
            for j in range(self.df.shape[1]):
                item = QTableWidgetItem(str(self.df.iloc[i, j]))
                self.tableWidget.setItem(i, j, item)

    def showMessageBox(self, title, message):
        msgBox = QMessageBox()
        msgBox.setWindowTitle(title)
        msgBox.setText(message)
        msgBox.exec()

class SubWindow(QWidget):
    def __init__(self, df):
        super().__init__()
        self.df = df
        self.initUI()

    def initUI(self):
        self.setWindowTitle('Dữ Liệu Lọc')
        self.setGeometry(100, 100, 600, 400)

        layout = QVBoxLayout()

        # Tạo và điền dữ liệu vào bảng
        self.tableWidget = QTableWidget()
        self.populateTable()
        layout.addWidget(self.tableWidget)

        self.setLayout(layout)

    def populateTable(self):
        if self.df is None:
            return

        columns = self.df.columns
        self.tableWidget.setColumnCount(len(columns))
        self.tableWidget.setHorizontalHeaderLabels(columns)

        self.tableWidget.setRowCount(self.df.shape[0])
        for i in range(self.df.shape[0]):
            for j in range(self.df.shape[1]):
                item = QTableWidgetItem(str(self.df.iloc[i, j]))
                self.tableWidget.setItem(i, j, item)

if __name__ == '__main__':
    app = QApplication(sys.argv)
    mainWindow = MainWindow()
    mainWindow.show()
    sys.exit(app.exec_())
