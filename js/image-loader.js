// 画像の読み込みとフォールバック処理
function loadHotelImage(imgElement, hotel, basePath = '') {
    if (!imgElement || !hotel) return;

    // 画像パスの調整（ページの階層に応じて）
    const imagePath = basePath + hotel.image;
    
    // まず実際の画像を試す
    const testImage = new Image();
    
    testImage.onload = function() {
        imgElement.src = imagePath;
        imgElement.alt = hotel.name;
    };
    
    testImage.onerror = function() {
        // 画像が存在しない場合はプレースホルダーを使用
        imgElement.src = hotel.placeholder || `https://via.placeholder.com/800x400/cccccc/666666?text=${encodeURIComponent(hotel.name)}`;
        imgElement.alt = hotel.name;
    };
    
    testImage.src = imagePath;
}

// 複数の画像要素に対して一括で処理
function loadAllHotelImages(basePath = '') {
    const images = document.querySelectorAll('[data-hotel-id]');
    
    images.forEach(img => {
        const hotelId = img.getAttribute('data-hotel-id');
        const hotels = getHotels();
        const hotel = hotels.find(h => h.id === hotelId);
        
        if (hotel) {
            loadHotelImage(img, hotel, basePath);
        }
    });
}