# アーキテクチャ

## 主な利用ライブラリ

- NestJS
- Prisma

## ディレクトリ

```
.
├── docs                # ドキュメント類を格納
├── generated           # 自動生成されたコードやファイル
├── prisma              # Prisma 関連の設定・スキーマ
│   └── migrations      # マイグレーションファイル
│   └── schema.prisma      # データモデル
├── src                 # アプリケーション本体のソースコード
│   └── shared          # 汎用モジュール
│   └── ${feature-name}          # 機能モジュール
└── test                # e2eテスト
```
