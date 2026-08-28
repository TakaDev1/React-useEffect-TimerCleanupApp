# React-useEffect-TimerCleanupApp

Reactの `useEffect` とクリーンアップ処理を使って、タイマーの開始・停止とコンポーネントのアンマウント時の処理を学習する練習用アプリです。

## 📌 概要

タイマー処理に `setInterval` を使用し、1秒ごとにカウントを更新します。

`useEffect` のクリーンアップ関数で `clearInterval` を実行することで、コンポーネントが不要になった際にタイマー処理を停止します。

## 🛠 使用技術

* TypeScript
* React
* Vite
* Tailwind CSS
* useState
* useEffect
* setInterval
* clearInterval

## 📂 ディレクトリ構成

```text
src/
├── components/
│   ├── HandleTimer.tsx
│   └── DisplayCount.tsx
├── App.tsx
└── index.css
```

## ✨ 実装内容

### 1. タイマーの状態管理

`useState` を使用してカウントを管理します。

```tsx
const [count, setCount] = useState(0);
```

### 2. タイマー処理

`setInterval` を使用して、1秒ごとにカウントを更新します。

```tsx
const timer = setInterval(() => {
  setCount((prev) => prev + 1);
}, 1000);
```

### 3. useEffectによるタイマー処理

`useEffect` を使用してタイマーを開始します。

```tsx
useEffect(() => {
  const timer = setInterval(() => {
    setCount((prev) => prev + 1);
  }, 1000);

  return () => {
    clearInterval(timer);
  };
}, []);
```

### 4. クリーンアップ処理

`useEffect` のクリーンアップ関数で `clearInterval` を実行し、コンポーネントがアンマウントされたときにタイマーを停止します。

```tsx
return () => {
  clearInterval(timer);
};
```

これにより、コンポーネントが不要になった後もタイマーが実行され続けることを防ぎます。

### 5. コンポーネントの役割分割

タイマーの処理とカウントの表示を別々のコンポーネントに分割しています。

* `HandleTimer.tsx` → タイマー処理を担当
* `DisplayCount.tsx` → カウントの表示を担当

## 🎯 学習ポイント

* `useState` による状態管理
* `useEffect` の基本的な使い方
* `useEffect` のクリーンアップ処理
* `setInterval` を使用した定期処理
* `clearInterval` によるタイマー停止
* コンポーネントのアンマウント
* Propsを使った親子コンポーネント間のデータ受け渡し
* コンポーネントの役割分割

## 🚀 起動方法

```bash
npm install
npm run dev
```

表示されたURLをブラウザで開いてください。

## 📝 学習課題

> `useEffect` を使用して1秒ごとにカウントを更新するタイマーを作成し、コンポーネントがアンマウントされたときにタイマーを停止する。

### 条件

1. `count` を `useState` で管理する
2. `useEffect` を使用してタイマー処理を実装する
3. `setInterval` を使用して1秒ごとにカウントを更新する
4. クリーンアップ関数で `clearInterval` を実行する
5. タイマー処理とカウント表示のコンポーネントを分割する
6. ボタンや表示部分をTailwind CSSでスタイリングする
