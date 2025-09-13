// モックデータ
const mockHotels = [
    {
        id: "hotel_001",
        name: "東京ベイサイドホテル",
        type: "シティホテル",
        area: "東京都",
        address: "東京都港区台場1-2-3",
        phone: "03-1234-5678",
        checkIn: "15:00",
        checkOut: "11:00",
        price: {
            instant: 10000,
            surprise: 5000
        },
        description: "東京湾を一望できる絶景ホテル。お台場の中心に位置し、観光にも便利。",
        features: ["オーシャンビュー", "大浴場", "朝食ビュッフェ", "Wi-Fi無料", "駐車場"],
        image: "assets/images/hotels/hotel_001.jpg",
        placeholder: "https://via.placeholder.com/800x400/4a90e2/ffffff?text=東京ベイサイドホテル"
    },
    {
        id: "hotel_002",
        name: "浅草和風旅館 雅",
        type: "旅館",
        area: "東京都",
        address: "東京都台東区浅草2-3-4",
        phone: "03-2345-6789",
        checkIn: "16:00",
        checkOut: "10:00",
        price: {
            instant: 10000,
            surprise: 5000
        },
        description: "浅草寺から徒歩5分。純和風の客室で日本の伝統を体験できます。",
        features: ["和室", "温泉", "懐石料理", "浴衣貸出", "日本庭園"],
        image: "assets/images/hotels/hotel_002.jpg",
        placeholder: "https://via.placeholder.com/800x400/8b4513/ffffff?text=浅草和風旅館+雅"
    },
    {
        id: "hotel_003",
        name: "箱根湯本温泉リゾート",
        type: "リゾートホテル",
        area: "神奈川県",
        address: "神奈川県足柄下郡箱根町湯本1-1",
        phone: "0460-1234-5678",
        checkIn: "14:00",
        checkOut: "11:00",
        price: {
            instant: 10000,
            surprise: 5000
        },
        description: "箱根の山々に囲まれた温泉リゾート。絶景と温泉を満喫できます。",
        features: ["露天風呂", "スパ", "懐石料理", "送迎バス", "貸切風呂"],
        image: "assets/images/hotels/hotel_003.jpg",
        placeholder: "https://via.placeholder.com/800x400/228b22/ffffff?text=箱根湯本温泉リゾート"
    },
    {
        id: "hotel_004",
        name: "成田エアポートホテル",
        type: "ビジネスホテル",
        area: "千葉県",
        address: "千葉県成田市取香町456",
        phone: "0476-1234-5678",
        checkIn: "15:00",
        checkOut: "10:00",
        price: {
            instant: 10000,
            surprise: 5000
        },
        description: "成田空港からアクセス抜群。早朝・深夜便にも対応した便利なホテル。",
        features: ["空港送迎", "大浴場", "24時間対応", "コインランドリー", "ビジネスセンター"],
        image: "assets/images/hotels/hotel_004.jpg",
        placeholder: "https://via.placeholder.com/800x400/9370db/ffffff?text=成田エアポートホテル"
    },
    {
        id: "hotel_005",
        name: "大宮パレスホテル",
        type: "シティホテル",
        area: "埼玉県",
        address: "埼玉県さいたま市大宮区桜木町1-7-5",
        phone: "048-1234-5678",
        checkIn: "15:00",
        checkOut: "11:00",
        price: {
            instant: 10000,
            surprise: 5000
        },
        description: "大宮駅から徒歩5分。ビジネスと観光の拠点に最適なホテル。",
        features: ["駅近", "ビジネスセンター", "フィットネス", "レストラン", "宿泊者用ラウンジ"],
        image: "assets/images/hotels/hotel_005.jpg",
        placeholder: "https://via.placeholder.com/800x400/00ced1/ffffff?text=大宮パレスホテル"
    },
    {
        id: "hotel_006",
        name: "水戸プラザホテル",
        type: "ビジネスホテル",
        area: "茨城県",
        address: "茨城県水戸市宮町1-6-1",
        phone: "029-1234-5678",
        checkIn: "14:00",
        checkOut: "11:00",
        price: {
            instant: 10000,
            surprise: 5000
        },
        description: "水戸駅直結。偉島公園やアクアワールド大洋へのアクセスも便利。",
        features: ["朝食付き", "大浴場", "コインランドリー", "観光案内", "駅直結"],
        image: "assets/images/hotels/hotel_006.jpg",
        placeholder: "https://via.placeholder.com/800x400/ff6347/ffffff?text=水戸プラザホテル"
    },
    {
        id: "hotel_007",
        name: "日光東照宮ホテル",
        type: "リゾートホテル",
        area: "栃木県",
        address: "栃木県日光市安川町2-53",
        phone: "0288-1234-5678",
        checkIn: "15:00",
        checkOut: "11:00",
        price: {
            instant: 10000,
            surprise: 5000
        },
        description: "世界遺産日光の社寺を巡る拠点。歴史と自然を満喫できるリゾート。",
        features: ["温泉", "世界遺産ツアー", "和食レストラン", "送迎サービス", "庭園"],
        image: "assets/images/hotels/hotel_007.jpg",
        placeholder: "https://via.placeholder.com/800x400/4169e1/ffffff?text=日光東照宮ホテル"
    },
    {
        id: "hotel_008",
        name: "草津温泉リゾート",
        type: "温泉リゾート",
        area: "群馬県",
        address: "群馬県吉岡郡草津町草津464-35",
        phone: "0279-1234-5678",
        checkIn: "15:00",
        checkOut: "10:00",
        price: {
            instant: 10000,
            surprise: 5000
        },
        description: "日本三名泉の一つ草津温泉。湯畑での温泉街歩きも楽しめる温泉リゾート。",
        features: ["名湯草津の湯", "露天風呂", "湯畑散策", "伝統工芸体験", "和会席料理"],
        image: "assets/images/hotels/hotel_008.jpg",
        placeholder: "https://via.placeholder.com/800x400/9370db/ffffff?text=草津温泉リゾート"
    },
    {
        id: "hotel_009",
        name: "下町ビジネスホテル 昭和館",
        type: "ビジネスホテル",
        area: "東京都",
        address: "東京都足立区千住3-45-6",
        phone: "03-3456-7890",
        checkIn: "15:00",
        checkOut: "10:00",
        price: {
            instant: 10000,
            surprise: 5000
        },
        description: "昭和の雰囲気が残る下町のビジネスホテル。レトロな内装と人情味あふれるサービスが特徴。",
        features: ["格安料金", "大浴場", "コインランドリー", "喫煙可", "駅から徒歩8分"],
        image: "assets/images/hotels/hotel_009.jpg",
        placeholder: "https://via.placeholder.com/800x400/8B7355/ffffff?text=下町ビジネスホテル+昭和館"
    },
    {
        id: "hotel_010",
        name: "鬼怒川温泉ホテル",
        type: "温泉ホテル",
        area: "栃木県",
        address: "栃木県日光市鬼怒川温泉大原1409",
        phone: "0288-2345-6789",
        checkIn: "15:00",
        checkOut: "10:00",
        price: {
            instant: 10000,
            surprise: 5000
        },
        description: "鬼怒川渓谷を見下ろす絶景温泉ホテル。四季折々の自然美と上質な温泉を楽しめます。",
        features: ["渓谷美", "露天風呂", "懐石料理", "貸切風呂", "季節の庭園"],
        image: "assets/images/hotels/hotel_010.jpg",
        placeholder: "https://via.placeholder.com/800x400/2E8B57/ffffff?text=鬼怒川温泉ホテル"
    },
    {
        id: "hotel_011",
        name: "那須ログコテージ 森の家",
        type: "コテージ",
        area: "栃木県",
        address: "栃木県那須郡那須町高久乙3375-234",
        phone: "0287-7890-1234",
        checkIn: "15:00",
        checkOut: "10:00",
        price: {
            instant: 10000,
            surprise: 5000
        },
        description: "那須の森に佇む一棟貸しのログコテージ。自然に囲まれながら、のんびりとした時間を過ごせます。",
        features: ["一棟貸し", "薪ストーブ", "バーベキューセット", "ペット可", "キッチン付き"],
        image: "assets/images/hotels/hotel_011.jpg",
        placeholder: "https://via.placeholder.com/800x400/8B4513/ffffff?text=那須ログコテージ+森の家"
    }
];

// エリアリスト（関東圏）
const areas = ["東京都", "神奈川県", "千葉県", "埼玉県", "茨城県", "栃木県", "群馬県"];

// ローカルストレージの初期化
function initializeData() {
    // ホテルデータの保存（常に最新のデータで更新）
    localStorage.setItem('yadogacha_hotels', JSON.stringify(mockHotels));
    
    // 予約データの初期化
    if (!localStorage.getItem('yadogacha_reservations')) {
        localStorage.setItem('yadogacha_reservations', JSON.stringify([]));
    }
    
    // 現在のユーザー（モック）
    if (!localStorage.getItem('yadogacha_current_user')) {
        localStorage.setItem('yadogacha_current_user', 'user_001');
    }
}

// データ取得関数
function getHotels() {
    const storedHotels = localStorage.getItem('yadogacha_hotels');
    if (!storedHotels) {
        // ローカルストレージにデータがない場合は、mockHotelsを使用して初期化
        localStorage.setItem('yadogacha_hotels', JSON.stringify(mockHotels));
        return mockHotels;
    }
    return JSON.parse(storedHotels);
}

function getReservations() {
    return JSON.parse(localStorage.getItem('yadogacha_reservations') || '[]');
}

function saveReservation(reservation) {
    const reservations = getReservations();
    reservations.push(reservation);
    localStorage.setItem('yadogacha_reservations', JSON.stringify(reservations));
}

function getCurrentUser() {
    return localStorage.getItem('yadogacha_current_user');
}

// エリアに対応するホテルを取得する関数
function getHotelsByArea(area) {
    const hotels = getHotels();
    return hotels.filter(hotel => hotel.area === area);
}

// エリア別のホテル数を取得する関数
function getHotelCountByArea() {
    const hotels = getHotels();
    const countByArea = {};
    
    areas.forEach(area => {
        countByArea[area] = hotels.filter(h => h.area === area).length;
    });
    
    return countByArea;
}

// デバッグ用：全データを確認する関数
function debugHotelData() {
    console.log('=== ホテルデータデバッグ情報 ===');
    console.log('全ホテル数:', getHotels().length);
    console.log('エリア別ホテル数:', getHotelCountByArea());
    console.log('全ホテルデータ:', getHotels());
}

// 初期化実行
initializeData();