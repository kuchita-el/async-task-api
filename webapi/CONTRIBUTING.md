# 開発の進め方

## 要件定義・API設計

- 実装したいAPIのエンドポイント、リクエスト/レスポンス仕様、認証要件などを整理
- 必要に応じてOpenAPI(Swagger)仕様書を作成

## データベース設計

- prisma/schema.prismaでモデル設計
- モデル追加・リレーション設計
- Prismaマイグレーション実行

## Prisma Clientの生成

- Prisma Clientを生成

## NestJSモジュール・サービス・コントローラ作成

- nest g module <name> で機能ごとにモジュール作成
- nest g service <name> でビジネスロジック層作成
- nest g controller <name> でAPIエンドポイント作成
- PrismaServiceを作成し、DIで各サービスからPrisma Clientを利用

## API実装

- まずテスト（ユニットテスト/E2Eテスト）を作成し、失敗することを確認
- サービス層でPrisma Clientを使いDBアクセス実装
- コントローラでリクエスト/レスポンス処理
- バリデーションやエラーハンドリングも追加
- テストがパスするまで実装・リファクタリングを繰り返す

## コード整形・Lint

- npm run format でPrettierによる整形
- npm run lint でESLintによる静的解析

##  動作確認・デバッグ

- npm run start:dev でサーバ起動
- PostmanやcurlでAPI動作確認

## ドキュメント整備

- READMEやAPI仕様書の更新
- 必要に応じてSwagger導入
