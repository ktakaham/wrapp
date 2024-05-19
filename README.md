## Next.js

### 利用技術

- Next.js
- TypeScript
- ESLint
- Prettier
- Husky
- Hasura
- Firebase

## ディレクトリ構成

```
root/
┣━pages/ ページのルーティングとSEO設定など src以下の同じページ階層のコンポーネントを呼ぶ
┣━public/
┣━hasura/ DBマイグレーション、メタデータ保存場所
┣━src/
  ┣━components/ 複数ページで利用するコンポーネント
  ┣━layouts/ 複数ページで利用するレイアウトコンポーネント
  ┣━libs/ ライブラリのラッパー関数等
  ┣━pages/ 特定のページごとに使うファイル
    ┣━〇〇
      ┣━〇〇〇.tsx 〇〇ページでのみ使うコンポーネント
      ┣━use〇〇〇.ts 〇〇ページでのみ使うhooks
      ┣━type.ts 〇〇ページでのみ使う型
    ┣
  ┣━types/ 複数ページで利用する型
  ┣━utils, hooks, styles, const, 複数ページで利用する〇〇

```

## Hasura 実装手順（DB カラム/テーブル操作時）

hasura コンソール実行

```
yarn hasura:console
```

hasura コンソール UI から DB 操作を行うことで、
hasura/ディレクトリに migration および metadata ファイルが生成される。
（本番反映はこのファイルから自動的に DB を構築する）

```
.env.local
hasura/env/.dev.env
```
の設定ファイルの配置が別途必要です。
こちらは個別で連携します。

## Hasura 実装手順（クエリ作成時）
Hasura コンソールのAPIタブからGraphql作成

作成したGraphqlを下記pathに配置する。
```
src/utils/apollo/graphql/query
```
ファイル名の命名規則は別途検討必要
また、insert/updateの場合は、
```
src/utils/apollo/graphql/mutation
```
fragmentの場合は、
```
src/utils/apollo/graphql/fragment
```
フォルダにクエリ配置するようにします。

配置完了後、下記コマンドを実行
```
yarn codegen
```
このコマンドを実行することで、
```
src/utils/apollo/generated.ts
```
ファイルにTS用のgraphql実行関数が生成されます。
この関数をreact側から呼び出すことで、DB参照することが可能になります。# worship_reader_v2
# wrapp
# wrapp
