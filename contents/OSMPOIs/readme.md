# ディレクトリの位置づけ

このディレクトリのデータは、OpenStreetMapデータから特定の地物をポイント情報の主題情報として抽出、[svgmapAppLayers/appLayers/multiCsvViewレイヤー](https://github.com/svgmap/svgmapAppLayers/tree/main/appLayers/multiCsvView)がアクセスすることを想定したものです。

# データセット追加方法

以下の手順に従って、データセットをレイヤーに追加します。

## 追加手順
1. **OpenSetrretMapデータから所望の地物データセットのCSVデータを構築する**

   [こちらのwikiページに詳細な手順を記載しています](https://www.svgmap.org/wiki/index.php?title=OpenStreetMap%E3%83%87%E3%83%BC%E3%82%BF%E3%81%8B%E3%82%89%E3%83%AC%E3%82%A4%E3%83%A4%E3%83%BC%E3%82%92%E4%BD%9C%E6%88%90%E3%81%99%E3%82%8B)

1. **データの可視化**

   「CSVデータ可視化」レイヤーを使用して、まずは対象のデータを可視化します。

2. **JSONファイルの保存**

   「管理」タブを開き、`[表示中データセットjsonファイルを保存]` ボタンを押して JSONファイルを保存します。

3. **ファイルの配置（保存）**

   保存したJSONファイルを**ユニークな（他と被らない）ファイル名**に変更し、以下のディレクトリに保存します。
   > **保存先ディレクトリ:** `/uploaded/contents/`

4. **インデックスの更新**

   以下のインデックスファイルを開き、手順3で追加した該当ファイルのレコードを追記して保存します。
   > **対象ファイル:** `/uploaded/index.txt`
