// モックデータ
const mockHotels = [
    {
        id: "hotel_001",
        name: "東京ベイサイドホテル",
        type: "シティホテル",
        area: "東京",
        address: "東京都港区台場1-2-3",
        phone: "03-1234-5678",
        checkIn: "15:00",
        checkOut: "11:00",
        price: {
            instant: 12000,
            surprise: 8000
        },
        description: "東京湾を一望できる絶景ホテル。お台場の中心に位置し、観光にも便利。",
        features: ["オーシャンビュー", "大浴場", "朝食ビュッフェ", "Wi-Fi無料", "駐車場"],
        image: "https://via.placeholder.com/800x400/4a90e2/ffffff?text=東京ベイサイドホテル"
    },
    {
        id: "hotel_002",
        name: "浅草和風旅館 雅",
        type: "旅館",
        area: "東京",
        address: "東京都台東区浅草2-3-4",
        phone: "03-2345-6789",
        checkIn: "16:00",
        checkOut: "10:00",
        price: {
            instant: 15000,
            surprise: 10000
        },
        description: "浅草寺から徒歩5分。純和風の客室で日本の伝統を体験できます。",
        features: ["和室", "温泉", "懐石料理", "浴衣貸出", "日本庭園"],
        image: "https://via.placeholder.com/800x400/8b4513/ffffff?text=浅草和風旅館+雅"
    },
    {
        id: "hotel_003",
        name: "京都嵐山リゾート",
        type: "リゾートホテル",
        area: "京都",
        address: "京都府京都市右京区嵐山1-1",
        phone: "075-1234-5678",
        checkIn: "14:00",
        checkOut: "11:00",
        price: {
            instant: 18000,
            surprise: 12000
        },
        description: "嵐山の自然に囲まれた贅沢なリゾート。四季折々の景色が楽しめます。",
        features: ["露天風呂", "スパ", "京懐石", "送迎バス", "貸切風呂"],
        image: "https://via.placeholder.com/800x400/228b22/ffffff?text=京都嵐山リゾート"
    },
    {
        id: "hotel_004",
        name: "祇園ステイ",
        type: "町家ホテル",
        area: "京都",
        address: "京都府京都市東山区祇園町3-2-1",
        phone: "075-2345-6789",
        checkIn: "15:00",
        checkOut: "10:00",
        price: {
            instant: 14000,
            surprise: 9500
        },
        description: "京都の風情を感じる町家を改装したホテル。祇園の中心で京都を満喫。",
        features: ["町家", "キッチン付き", "和モダン", "コンシェルジュ", "自転車レンタル"],
        image: "https://via.placeholder.com/800x400/9370db/ffffff?text=祇園ステイ"
    },
    {
        id: "hotel_005",
        name: "沖縄ビーチリゾート",
        type: "リゾートホテル",
        area: "沖縄",
        address: "沖縄県恩納村真栄田1-2-3",
        phone: "098-1234-5678",
        checkIn: "15:00",
        checkOut: "11:00",
        price: {
            instant: 16000,
            surprise: 11000
        },
        description: "エメラルドグリーンの海が目の前に広がる極上リゾート。",
        features: ["プライベートビーチ", "プール", "マリンスポーツ", "BBQ", "サンセットバー"],
        image: "https://via.placeholder.com/800x400/00ced1/ffffff?text=沖縄ビーチリゾート"
    },
    {
        id: "hotel_006",
        name: "那覇シティホテル",
        type: "ビジネスホテル",
        area: "沖縄",
        address: "沖縄県那覇市国際通り2-3-4",
        phone: "098-2345-6789",
        checkIn: "14:00",
        checkOut: "11:00",
        price: {
            instant: 8000,
            surprise: 5500
        },
        description: "国際通りに面した便利なロケーション。観光にもビジネスにも最適。",
        features: ["朝食付き", "大浴場", "コインランドリー", "レンタカー手配", "空港送迎"],
        image: "https://via.placeholder.com/800x400/ff6347/ffffff?text=那覇シティホテル"
    },
    {
        id: "hotel_007",
        name: "札幌雪まつりホテル",
        type: "シティホテル",
        area: "北海道",
        address: "北海道札幌市中央区大通西4-5-6",
        phone: "011-1234-5678",
        checkIn: "15:00",
        checkOut: "11:00",
        price: {
            instant: 13000,
            surprise: 9000
        },
        description: "札幌の中心部に位置し、雪まつり会場へも徒歩圏内。北海道観光の拠点に。",
        features: ["暖房完備", "朝食ビュッフェ", "スキー用品預かり", "温泉", "ジンギスカン"],
        image: "https://via.placeholder.com/800x400/4169e1/ffffff?text=札幌雪まつりホテル"
    },
    {
        id: "hotel_008",
        name: "富良野ラベンダーリゾート",
        type: "リゾートホテル",
        area: "北海道",
        address: "北海道富良野市北の峰1-2-3",
        phone: "0167-1234-5678",
        checkIn: "15:00",
        checkOut: "10:00",
        price: {
            instant: 20000,
            surprise: 14000
        },
        description: "ラベンダー畑に囲まれた高原リゾート。大自然の中で贅沢な時間を。",
        features: ["ラベンダー畑", "露天風呂", "ファーム体験", "地産地消レストラン", "星空観察"],
        image: "https://via.placeholder.com/800x400/9370db/ffffff?text=富良野ラベンダーリゾート"
    }
];

// エリアリスト
const areas = ["東京", "京都", "沖縄", "北海道"];

// ローカルストレージの初期化
function initializeData() {
    // ホテルデータの保存
    if (!localStorage.getItem('yadogacha_hotels')) {
        localStorage.setItem('yadogacha_hotels', JSON.stringify(mockHotels));
    }
    
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
    return JSON.parse(localStorage.getItem('yadogacha_hotels') || '[]');
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

// 初期化実行
initializeData();