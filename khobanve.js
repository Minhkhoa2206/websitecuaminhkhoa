const products = [
    { 
        code: "0001K",
        name: "Bản Vẽ Khách Sạn Nha Trang", 
        image: "0001K.png", 
        price: "Miễn Phí Nhe", 
        link: "https://terabox.com/s/1SE_9ad0T-Hu5cwaiTLDloA", 
        description: "File AutoCaD" 
    },
    { 
        code: "0002K",
        name: "Bản Vẽ Trung Tâm TM Lilama", 
        image: "0002K.jpg", 
        price: "Miễn Phí", 
        link: "https://terabox.com/s/12jn3yrbCCC2_Df5TzOvaog", 
        description: "AuToCad" 
    },
    { 
        code: "0003K",
        name: "Bản vẽ dự án Vincom CityTower HÀ NỘI", 
        image: "0003K.jpg", 
        price: "Miễn Phí Nè", 
        link: "https://terabox.com/s/1y8waEtgfLoG5v_PukBUVCw", 
        description: "AutoCad" 
    },
    { 
        code: "0004K",
        name: "Bản Vẽ Văn Phòng Cho Thuê", 
        image: "0004K.jpg", 
        price: "Miễn Phí Nè", 
        link: "https://terabox.com/s/1dds0uRu7g-kvtuuGwI75nA", 
        description: "AutoCad-văn phòng" 
    },
    { 
        code: "0005K",
        name: "Bản Vẽ dự án Diamond Plaza", 
        image: "0005K.jpg", 
        price: "Miễn Phí Nè", 
        link: "https://terabox.com/s/1MUMWjdY5skaoiOHjFAk_jQ", 
        description: "AutoCad" 
    },

    { 
        code: "0006K",
        name: "Bản Vẽ Khách Sạn Hotel Paradise", 
        image: "0006K.jpg", 
        price: "Miễn Phí Nè", 
        link: "https://terabox.com/s/1hPbVFqESSvcT3uGAxWdajA", 
        description: "AutoCad" 
    },
    { 
        code: "0007K",
        name: "Bản Vẽ Hotel Viễn Đông", 
        image: "0007K.jpg", 
        price: "Miễn Phí Nè", 
        link: "https://terabox.com/s/17eCVSSAHgbwpnwLoRgddWw", 
        description: "AutoCad" 
    },

    { 
        code: "0008K",
        name: "Bản Vẽ Khách Sạn CONTINENTAL", 
        image: "0008K.jpg", 
        price: "Miễn Phí Nè", 
        link: "https://terabox.com/s/1BeK7OszqM_XNGk2arQ-1GA", 
        description: "AutoCad" 
    },
    { 
        code: "0009K",
        name: "Bản Vẽ Khách Sạn Cao Cấp 12 Tầng", 
        image: "0009K.jpg", 
        price: "Miễn Phí Nè", 
        link: "https://terabox.com/s/10_tAJubU9LUmcRvhcSwiag", 
        description: "BV AutoCad - 12 Tầng- Khách sạn" 
    },
    { 
        code: "0010Q",
        name: "Bản Vẽ Cao Óc Nguyen Thi Minh Khai", 
        image: "0010Q.jpg", 
        price: "Miễn Phí Nè", 
        link: "https://terabox.com/s/1Yn5IMQod_Dd2K505bGPleQ", 
        description: "BV AutoCad - Cao Óc- văn phòng" 
    },
    { 
        code: "0011Q",
        name: "Bản Vẽ Cao Óc Văn Phòng Bitexco", 
        image: "0011Q.jpg", 
        price: "Miễn Phí Nè", 
        link: "https://terabox.com/s/1X5Pu4HqfFlNL4oPOVu70Gg", 
        description: "BV AutoCad - Cao Óc- văn phòng" 
    },
    { 
        code: "0012Q",
        name: "Bản Vẽ Chung Cư Cao Cấp", 
        image: "0012Q.jpg", 
        price: "Miễn Phí Nè", 
        link: "https://terabox.com/s/1t1U7yssjEfFyXPetHECdhQ", 
        description: "BV AutoCad - chung cư- Cao Cấp" 
    },
    { 
        code: "0013Q",
        name: "Bản Vẽ Chung Cư Cao Tầng", 
        image: "0013Q.jpg", 
        price: "Miễn Phí Nè", 
        link: "https://terabox.com/s/1zFtqY2pEwt06REVX-gqhpA", 
        description: "BV AutoCad - chung cư" 
    },
    { 
        code: "0014Q",
        name: "Tòa nhà văn phòng Phú Điền Building - Quận Hoàn Kiếm", 
        image: "0014Q.jpg", 
        price: "Miễn Phí Nè", 
        link: "https://terabox.com/s/1H3QAZa8009MyMemQhKbCKw", 
        description: "BV AutoCad - chung cư-văn phòng" 
    },
    { 
        code: "0015Q",
        name: "Bản Vẽ Chung Cư- Nghệ An", 
        image: "0015Q.png", 
        price: "Miễn Phí Nè", 
        link: "https://terabox.com/s/19hgiHPTeGyGZZp2Bn9Vv_w", 
        description: "BV AutoCad - chung cư" 
    },
    { 
        code: "0016Q",
        name: "Bản Vẽ Tòa Tháp Keangnam Hanoi Landmark", 
        image: "0016Q.jpg", 
        price: "Miễn Phí Nè", 
        link: "https://terabox.com/s/1huIGXzP6SjV2mj7JvWezqg", 
        description: "BV AutoCad - chung cư" 
    },
    { 
        code: "0017Q",
        name: "Kiến Trúc Tòa Nhà VNPT Tower", 
        image: "0017Q.jpg", 
        price: "Miễn Phí Nè", 
        link: "https://terabox.com/s/1w9rOzSjD38ukleaxE3o4sw", 
        description: "BV AutoCad - chung cư" 
    },
    { 
        code: "0018Q",
        name: "Kiến trúc Dream Hotel", 
        image: "0018Q.jpg", 
        price: "Miễn Phí Nè", 
        link: "https://terabox.com/s/1d05xKYWlbieVhhADmK4C6g", 
        description: "BV AutoCad - chung cư" 
    },
    { 
        code: "0019Q",
        name: "Kiến trúc Dream Hotel", 
        image: "0019Q.jpg", 
        price: "Miễn Phí Nè", 
        link: "https://terabox.com/s/1raOdyka0U8P-gnSOmqG3Bg", 
        description: "BV AutoCad - chung cư" 
    },
    { 
        code: "0020Q",
        name: "BẢN VẼ KHÁCH SẠN NHA TRANG( CỦ CHI VĨNH HẢI NHA TRANG)", 
        image: "0020Q.png", 
        price: "Miễn Phí Nè", 
        link: "https://drive.google.com/file/d/1zJhl5LtNcGiSSZu6F9aJ5uPe_47tN9ZV/view?usp=sharing", 
        description: "BV AutoCad - chung cư" 
    },
];

// Xáo trộn mảng sản phẩm để hiển thị ngẫu nhiên
shuffleArray(products);

const productContainer = document.getElementById('product-container');

// Hiển thị sản phẩm đã xáo trộn
showProducts(products);

// Bộ lọc sản phẩm dựa trên chuỗi tìm kiếm
document.getElementById('searchInput').addEventListener('input', function() {
    const searchQuery = this.value.toLowerCase();
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchQuery) ||
        product.code.toLowerCase().includes(searchQuery) ||
        product.price.toString().includes(searchQuery) ||
        product.description.toLowerCase().includes(searchQuery)
    );
    showProducts(filteredProducts);
});


// Hiển thị danh sách sản phẩm
function showProducts(productsToShow) {
    productContainer.innerHTML = '';
    productsToShow.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        const productImg = document.createElement('img');
        productImg.src = product.image;
        productImg.alt = product.name;

        const productName = document.createElement('h3');
        productName.textContent = product.name;

        const productCode = document.createElement('p');
        productCode.textContent = `Mã bản vẽ: ${product.code}`;

        const productPrice = document.createElement('p');
        productPrice.textContent = `Đơn giá: ${product.price}`;

        const productDescription = document.createElement('p');
        productDescription.textContent = `Mô tả: ${product.description}`;

        const productLink = document.createElement('a');
        productLink.href = product.link;
        productLink.textContent = 'Dowload | Tải Xuống';
        productLink.target = '_blank'; // Thêm thuộc tính target='_blank'
        

        productDiv.appendChild(productImg);
        productDiv.appendChild(productName);
        productDiv.appendChild(productCode);
        productDiv.appendChild(productPrice);
        productDiv.appendChild(productDescription);
        productDiv.appendChild(productLink);

        productContainer.appendChild(productDiv);
    });
}

// Hàm xáo trộn mảng
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
