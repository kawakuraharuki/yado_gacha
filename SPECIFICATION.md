# 宿ガチャ プロトタイプ実装仕様書 Ver. 1.0

## 1. 概要

本仕様書は、「宿ガチャ」のプロトタイプ実装に関する技術仕様を定義します。
プロトタイプでは、ログイン機能と決済機能を除外し、コア機能の実装に焦点を当てます。

## 2. 技術スタック

- **フロントエンド**: HTML5, CSS3, JavaScript (Vanilla JS)
- **データ管理**: ローカルストレージ（localStorage）
- **UIフレームワーク**: なし（Pure CSS）
- **アイコン**: 絵文字を使用

## 3. 実装機能一覧

### 3.1 ユーザー向け機能

#### 3.1.1 検索条件入力機能
- エリア選択（プルダウン）
- 宿泊日選択（日付ピッカー）
- 人数選択（1〜4人）

#### 3.1.2 ガチャプラン選択機能
- 「すぐわかるガチャ」と「当日わかるガチャ」の2プラン表示
- 各プランの価格表示（モック価格）
- 品質保証メッセージの表示

#### 3.1.3 予約情報入力機能
- 宿泊者氏名
- 電話番号
- メールアドレス

#### 3.1.4 ガチャ結果表示機能
- アニメーション付きガチャ演出
- 宿泊施設詳細表示
  - ホテル名
  - 写真（プレースホルダー画像）
  - 住所
  - 電話番号
  - チェックイン/チェックアウト時間
  - 設備・特徴

#### 3.1.5 マイページ機能
- 予約履歴一覧
- 今後の予約（カウントダウン表示付き）
- 過去の予約

### 3.2 ホテルパートナー向け機能

#### 3.2.1 管理画面
- ホテル情報表示
- 在庫管理（カレンダー形式）
- 予約一覧表示

## 4. データモデル

### 4.1 予約データ
```javascript
{
  id: string,              // 予約ID
  userId: string,          // ユーザーID（モック）
  planType: string,        // "instant" or "surprise"
  area: string,            // エリア
  checkInDate: string,     // チェックイン日
  nights: number,          // 泊数
  guests: number,          // 人数
  guestName: string,       // 宿泊者名
  phone: string,           // 電話番号
  email: string,           // メールアドレス
  hotelId: string,         // ホテルID
  price: number,           // 料金
  status: string,          // "pending" or "revealed"
  createdAt: string,       // 予約作成日時
  revealDate: string       // 結果公開日時（当日わかるガチャの場合）
}
```

### 4.2 ホテルデータ
```javascript
{
  id: string,              // ホテルID
  name: string,            // ホテル名
  type: string,            // ホテルタイプ
  area: string,            // エリア
  address: string,         // 住所
  phone: string,           // 電話番号
  checkIn: string,         // チェックイン時間
  checkOut: string,        // チェックアウト時間
  price: {
    instant: number,       // すぐわかるガチャ価格
    surprise: number       // 当日わかるガチャ価格
  },
  description: string,     // 説明文
  features: string[],      // 特徴・設備
  image: string           // 画像URL
}
```

## 5. 画面遷移

### 5.1 ユーザー向け画面
1. トップページ（検索条件入力）
2. プラン選択画面
3. 予約情報入力画面
4. ガチャ結果画面
5. マイページ（予約一覧）

### 5.2 ホテルパートナー向け画面
1. 管理画面トップ
2. 在庫管理画面
3. 予約一覧画面

## 6. ローカルストレージ構造

```javascript
// 予約データ
localStorage.setItem('yadogacha_reservations', JSON.stringify([...]));

// 現在のユーザー（モック）
localStorage.setItem('yadogacha_current_user', 'user_001');

// ホテルデータ（モック）
localStorage.setItem('yadogacha_hotels', JSON.stringify([...]));
```

## 7. 実装上の制約

- ログイン機能なし（ユーザーIDは固定値を使用）
- 決済機能なし（予約確定ボタンで即座に予約完了）
- プッシュ通知なし
- バックエンドAPIなし（すべてローカルストレージで管理）

## 8. モックデータ

- 8〜10件の宿泊施設データを事前に用意
- 各エリア（東京、京都、沖縄、北海道）に2〜3件ずつ配置
- プレースホルダー画像を使用

## 9. レスポンシブデザイン

- スマートフォン優先のデザイン
- ブレークポイント: 768px
- タッチ操作に最適化されたUI

## 10. 今後の拡張予定

- ユーザー認証機能の実装
- Stripe決済機能の統合
- バックエンドAPI（Node.js + Express）の実装
- プッシュ通知機能の追加
- 実際の宿泊施設データとの連携