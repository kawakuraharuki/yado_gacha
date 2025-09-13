// 関東地方の観光データ
const tourismData = {
    "東京都": {
        plans: [
            {
                title: "東京下町文化体験コース",
                duration: "9:00～18:00",
                description: "江戸の風情を感じる下町散策と現代アートの融合",
                spots: [
                    {
                        time: "9:00-10:30",
                        place: "浅草寺・仲見世通り",
                        activity: "早朝の静かな浅草寺参拝と仲見世での和菓子作り体験",
                        highlight: "職人による和菓子作り体験（要予約）"
                    },
                    {
                        time: "11:00-12:30",
                        place: "隅田川水上バス",
                        activity: "水上バスでお台場へ移動しながら東京スカイツリーを眺望",
                        highlight: "船上から見る東京の新旧風景"
                    },
                    {
                        time: "13:00-15:00",
                        place: "チームラボボーダレス",
                        activity: "デジタルアート空間での没入体験",
                        highlight: "写真映えする幻想的な空間体験"
                    },
                    {
                        time: "15:30-17:00",
                        place: "東京タワー",
                        activity: "展望台から夕暮れの東京を一望",
                        highlight: "夕日に染まる富士山の眺望（天候による）"
                    }
                ],
                tips: "浅草での和菓子作り体験は事前予約必須。歩きやすい靴がおすすめ。"
            }
        ]
    },
    "神奈川県": {
        plans: [
            {
                title: "鎌倉歴史探訪と江ノ島海岸体験",
                duration: "9:00～19:00",
                description: "古都鎌倉の歴史と湘南の海を満喫する充実コース",
                spots: [
                    {
                        time: "9:00-10:00",
                        place: "鎌倉大仏（高徳院）",
                        activity: "国宝の大仏様を間近で拝観、胎内拝観も体験",
                        highlight: "大仏の胎内に入れる貴重な体験"
                    },
                    {
                        time: "10:30-12:00",
                        place: "鶴岡八幡宮・小町通り",
                        activity: "参拝後、小町通りで鎌倉彫り体験",
                        highlight: "伝統工芸の鎌倉彫りを制作"
                    },
                    {
                        time: "13:00-15:00",
                        place: "江ノ電乗車体験",
                        activity: "レトロな江ノ電で海沿いを走る",
                        highlight: "鎌倉高校前駅での記念撮影"
                    },
                    {
                        time: "15:30-18:00",
                        place: "江ノ島",
                        activity: "シーキャンドル展望台と岩屋洞窟探検",
                        highlight: "洞窟内の神秘的なイルミネーション"
                    }
                ],
                tips: "江ノ電1日乗車券がお得。江ノ島エスカーを利用すると楽に島内を移動できます。"
            }
        ]
    },
    "千葉県": {
        plans: [
            {
                title: "房総半島 海と大地の恵み体験",
                duration: "9:00～17:00",
                description: "太平洋の絶景と房総の味覚を堪能する自然体験コース",
                spots: [
                    {
                        time: "9:00-10:30",
                        place: "鋸山（のこぎりやま）",
                        activity: "ロープウェイで山頂へ、地獄のぞきで絶景体験",
                        highlight: "断崖絶壁から見下ろすスリル満点の眺望"
                    },
                    {
                        time: "11:00-12:30",
                        place: "漁港直営食堂",
                        activity: "新鮮な海の幸で海鮮丼作り体験",
                        highlight: "自分で選んだ魚介で作るオリジナル海鮮丼"
                    },
                    {
                        time: "13:30-15:00",
                        place: "マザー牧場",
                        activity: "動物ふれあい体験とチーズ作り",
                        highlight: "できたてモッツァレラチーズの試食"
                    },
                    {
                        time: "15:30-17:00",
                        place: "海ほたるPA",
                        activity: "東京湾アクアライン上での夕日鑑賞",
                        highlight: "360度パノラマの東京湾夕景"
                    }
                ],
                tips: "鋸山は歩きやすい靴必須。マザー牧場では汚れても良い服装で。"
            }
        ]
    },
    "埼玉県": {
        plans: [
            {
                title: "小江戸川越タイムスリップと秩父自然体験",
                duration: "9:00～18:00",
                description: "江戸情緒あふれる街並みと秩父の大自然を巡る",
                spots: [
                    {
                        time: "9:00-11:00",
                        place: "川越・時の鐘周辺",
                        activity: "着物レンタルで蔵造りの街並み散策",
                        highlight: "着物姿で時の鐘をバックに記念撮影"
                    },
                    {
                        time: "11:30-12:30",
                        place: "菓子屋横丁",
                        activity: "昔ながらの飴細工実演と体験",
                        highlight: "職人技を間近で見学、オリジナル飴作り"
                    },
                    {
                        time: "14:00-16:00",
                        place: "秩父・長瀞ライン下り",
                        activity: "荒川の急流を下るスリリングな川下り",
                        highlight: "天然記念物の岩畳を水上から観察"
                    },
                    {
                        time: "16:30-18:00",
                        place: "秩父神社・番場通り",
                        activity: "パワースポット参拝と地酒試飲",
                        highlight: "秩父の地酒3種飲み比べ"
                    }
                ],
                tips: "川越では歩きやすい着物用の履物を選択。長瀞ライン下りは濡れても良い服装で。"
            }
        ]
    },
    "茨城県": {
        plans: [
            {
                title: "ひたち海浜公園と大洗海岸アクティブ体験",
                duration: "9:00～17:00",
                description: "絶景の花畑と太平洋でのマリンアクティビティ",
                spots: [
                    {
                        time: "9:00-11:00",
                        place: "国営ひたち海浜公園",
                        activity: "ネモフィラの丘でのサイクリング体験",
                        highlight: "青い花の絨毯を自転車で巡る（4-5月限定）"
                    },
                    {
                        time: "11:30-13:00",
                        place: "那珂湊おさかな市場",
                        activity: "セリ見学と新鮮魚介の炭火焼き体験",
                        highlight: "自分で選んだ魚介をその場で焼いて食べる"
                    },
                    {
                        time: "14:00-16:00",
                        place: "大洗海岸",
                        activity: "SUP（スタンドアップパドル）体験",
                        highlight: "海上散歩で見る大洗磯前神社の鳥居"
                    },
                    {
                        time: "16:30-17:00",
                        place: "大洗磯前神社",
                        activity: "海に立つ鳥居での夕日鑑賞",
                        highlight: "神磯の鳥居と夕日のコラボレーション"
                    }
                ],
                tips: "ひたち海浜公園は季節により見頃の花が変わります。SUP体験は要事前予約。"
            }
        ]
    },
    "栃木県": {
        plans: [
            {
                title: "日光東照宮と奥日光大自然満喫コース",
                duration: "8:00～17:00",
                description: "世界遺産の社寺と雄大な自然が織りなす絶景体験",
                spots: [
                    {
                        time: "8:00-10:00",
                        place: "日光東照宮",
                        activity: "早朝の静寂な境内で特別拝観",
                        highlight: "眠り猫や三猿を間近で鑑賞"
                    },
                    {
                        time: "10:30-12:00",
                        place: "華厳の滝",
                        activity: "エレベーターで滝壺へ、大迫力の滝を体感",
                        highlight: "落差97mの滝を真下から見上げる"
                    },
                    {
                        time: "13:00-15:00",
                        place: "中禅寺湖",
                        activity: "カヌー体験で湖上散策",
                        highlight: "男体山を背景にした絶景カヌーイング"
                    },
                    {
                        time: "15:30-17:00",
                        place: "戦場ヶ原",
                        activity: "ネイチャーガイドと湿原トレッキング",
                        highlight: "高山植物や野鳥観察"
                    }
                ],
                tips: "標高が高いため、夏でも羽織るものを持参。歩きやすいトレッキングシューズ推奨。"
            }
        ]
    },
    "群馬県": {
        plans: [
            {
                title: "草津温泉街歩きと自然アクティビティ",
                duration: "9:00～18:00",
                description: "日本三名泉の温泉文化と上州の大自然を体験",
                spots: [
                    {
                        time: "9:00-10:30",
                        place: "草津温泉・湯畑",
                        activity: "湯もみ体験と温泉街散策",
                        highlight: "伝統の湯もみショーに参加"
                    },
                    {
                        time: "11:00-12:30",
                        place: "西の河原公園",
                        activity: "温泉の川での足湯トレッキング",
                        highlight: "自然の中の巨大露天風呂"
                    },
                    {
                        time: "14:00-16:00",
                        place: "草津国際スキー場（夏季）",
                        activity: "天空のジップライン体験",
                        highlight: "標高2000mからの絶景滑空"
                    },
                    {
                        time: "16:30-18:00",
                        place: "草津ガラス蔵",
                        activity: "吹きガラス体験",
                        highlight: "温泉の思い出をガラス作品に"
                    }
                ],
                tips: "湯もみ体験は動きやすい服装で。ジップラインは体重制限あり（要確認）。"
            }
        ]
    }
};

// 宿泊エリアに基づいて観光プランを取得
function getTourismPlan(area) {
    return tourismData[area] || null;
}

// 観光プランのHTMLを生成
function generateTourismPlanHTML(area) {
    const data = getTourismPlan(area);
    if (!data || !data.plans || data.plans.length === 0) return '';
    
    const plan = data.plans[0]; // 最初のプランを使用
    
    let spotsHTML = plan.spots.map(spot => `
        <div class="timeline-item">
            <div class="timeline-time">${spot.time}</div>
            <div class="timeline-content">
                <h4>${spot.place}</h4>
                <p>${spot.activity}</p>
                <div class="highlight">✨ ${spot.highlight}</div>
            </div>
        </div>
    `).join('');
    
    return `
        <div class="tourism-plan-section">
            <h3 class="tourism-title">🗺️ おすすめ1日観光プラン</h3>
            <div class="tourism-header">
                <h4>${plan.title}</h4>
                <p class="tourism-duration">所要時間: ${plan.duration}</p>
                <p class="tourism-description">${plan.description}</p>
            </div>
            <div class="timeline">
                ${spotsHTML}
            </div>
            <div class="tourism-tips">
                <strong>💡 アドバイス:</strong> ${plan.tips}
            </div>
        </div>
    `;
}