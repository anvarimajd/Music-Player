<div align="center">


# 🎵 Music Player


### اپلیکیشن مدرن پخش موسیقی با React Native و Expo

<p align="center">
  <img src="https://img.shields.io/badge/React%20Native-Latest-61DAFB?style=for-the-badge&logo=react">
  <img src="https://img.shields.io/badge/Expo-SDK%2057-000020?style=for-the-badge&logo=expo">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript">
  <img src="https://img.shields.io/badge/Platform-Android%20%7C%20iOS-success?style=for-the-badge">
</p>

یک رابط کاربری مدرن و زیبا برای اپلیکیشن پخش موسیقی که با **React Native**، **Expo** و **TypeScript** توسعه داده شده است.

</div>

---

## 📖 معرفی پروژه

این پروژه یک رابط کاربری (UI) برای اپلیکیشن Music Player است که با هدف آموزش طراحی رابط کاربری در React Native توسعه داده شده است.

در این پروژه نحوه ساخت کامپوننت‌های قابل استفاده مجدد، طراحی صفحات مدرن، مدیریت Layout و ساخت رابط کاربری مشابه اپلیکیشن‌های موسیقی محبوب آموزش داده می‌شود.

---

## ✨ امکانات

| ویژگی | وضعیت |
|--------|--------|
| طراحی کاملاً مدرن | ✅ |
| رابط کاربری مشابه Spotify | ✅ |
| لیست دسته‌بندی موسیقی | ✅ |
| بخش آهنگ‌های محبوب | ✅ |
| کارت‌های موسیقی | ✅ |
| نوار جستجو | ✅ |
| Mini Player | ✅ |
| طراحی Responsive | ✅ |
| کامپوننت‌های قابل استفاده مجدد | ✅ |
| استفاده از TypeScript | ✅ |
| معماری مناسب پروژه | ✅ |

---

## 📱 صفحات پروژه

- صفحه اصلی
- Search Bar
- دسته‌بندی موسیقی
- لیست آهنگ‌های محبوب
- Mini Player
- کارت آهنگ
- کارت دسته‌بندی

---

## 🛠 تکنولوژی‌های استفاده شده

- **React Native**
- **Expo SDK 57**
- **TypeScript**
- **Expo Router**
- **React Hooks**
- **JSX / TSX**
- **StyleSheet**

---

## 📂 ساختار پروژه

```text
Music-Player

├── src
│
├── app
│   └── index.tsx
│
├── components
│   ├── SearchBar.jsx
│   ├── CategoryCard.jsx
│   ├── CategoryList.jsx
│   ├── TopSongCard.jsx
│   ├── TopSongList.jsx
│   └── MiniPlayer.jsx
│
├── constants
│   └── colors.js
│
├── data
│   ├── categories.js
│   └── topSongs.js
│
├── assets
│
├── package.json
│
└── README.md
```

---

## 🚀 ساخت پروژه جدید

```bash
npx create-expo-app@latest
```

یا

```bash
npx create-expo-app@latest Music-Player
```

ورود به پروژه:

```bash
cd Music-Player
```

---

## 💻 پیش‌نیازهای نصب

- [ ] Node.js (LTS)
- [ ] npm
- [ ] Git
- [ ] Visual Studio Code
- [ ] Android Studio
- [ ] Android SDK
- [ ] Java JDK
- [ ] Expo Go

---

## ⚙ راه‌اندازی محیط توسعه

برای نصب صحیح React Native از مستندات رسمی استفاده کنید.

🔗 [https://reactnative.dev/docs/set-up-your-environment](https://reactnative.dev/docs/set-up-your-environment)

در این آموزش نحوه نصب موارد زیر توضیح داده شده است:

- Android Studio
- Android SDK
- Java JDK
- Environment Variables
- Android Emulator
- اجرای پروژه روی موبایل
- اجرای پروژه روی شبیه‌ساز

---

## 📥 دانلود Android Studio

در صورت مشکل در دانلود Android Studio می‌توانید از لینک زیر استفاده کنید.

🔗 [https://soft98.ir/mobile/16739-android-studio.html](https://soft98.ir/mobile/16739-android-studio.html)

---

## 📦 دانلود آفلاین Android SDK

اگر هنگام دانلود Emulator یا System Image با خطا مواجه شدید، فایل‌های آفلاین را از لینک زیر دریافت کنید.

🔗 [https://androidsdkoffline.blogspot.com/p/android-sysimg-gapi-playstore-ia-x64.html?m=1](https://androidsdkoffline.blogspot.com/p/android-sysimg-gapi-playstore-ia-x64.html?m=1)

---

## ⚡ نصب وابستگی‌ها

```bash
npm install
```

---

## ▶ اجرای پروژه

### اجرای Development Server

```bash
npx expo start
```

### اجرای روی اندروید

```bash
npx expo run:android
```

### اجرای روی iOS

```bash
npx expo run:ios
```

### پاک کردن کش

```bash
npx expo start -c
```

---

## 📱 اجرای پروژه روی موبایل

۱. برنامه **Expo Go** را نصب کنید.

۲. دستور زیر را اجرا کنید:

```bash
npx expo start
```

۳. QR Code نمایش داده شده را توسط **Expo Go** اسکن کنید.

---

## 📦 دستورات پرکاربرد

### نمایش نسخه Node

```bash
node -v
```

### نمایش نسخه npm

```bash
npm -v
```

### نمایش نسخه Expo

```bash
npx expo --version
```

### نصب پکیج

```bash
npm install package-name
```

### نصب پکیج مخصوص Expo

```bash
npx expo install package-name
```

---

## 🧩 کامپوننت‌های پروژه

| Component | توضیح |
|------------|-------|
| SearchBar | جستجوی موسیقی |
| CategoryCard | کارت دسته‌بندی |
| CategoryList | لیست دسته‌بندی‌ها |
| TopSongCard | کارت آهنگ |
| TopSongList | لیست آهنگ‌های محبوب |
| MiniPlayer | پخش‌کننده کوچک پایین صفحه |

---

## 🎯 اهداف آموزشی پروژه

در این پروژه با مفاهیم زیر آشنا خواهید شد:

- React Native
- Expo
- TypeScript
- TSX
- Component
- Props
- State
- React Hooks
- StyleSheet
- View
- ScrollView
- FlatList
- Text
- Image
- TouchableOpacity
- طراحی UI
- ساخت Layout
- معماری پروژه
- مدیریت رنگ‌ها
- ساخت Data فایل
- استفاده مجدد از Componentها

---

## 🚀 توسعه‌های آینده

- [ ] پخش واقعی موسیقی
- [ ] کنترل Play / Pause
- [ ] صفحه Now Playing
- [ ] Playlist
- [ ] Favorite Songs
- [ ] Shuffle
- [ ] Repeat
- [ ] جستجوی آنلاین
- [ ] دانلود موسیقی
- [ ] حالت Dark / Light
- [ ] انیمیشن‌های پیشرفته
- [ ] اتصال به API

---

## ❗ رفع مشکلات متداول

### پروژه اجرا نمی‌شود

```bash
npx expo start -c
```

### نصب نشدن پکیج‌ها

```bash
npm install
```

یا

```bash
rm -rf node_modules
npm install
```

### Emulator اجرا نمی‌شود

- ✅ فعال بودن Virtualization
- ✅ نصب Android SDK
- ✅ نصب Java JDK
- ✅ ساخت Emulator
- ✅ استفاده از Android SDK Offline

---

## 📚 منابع آموزشی

### مستندات React Native

🔗 [https://reactnative.dev/docs](https://reactnative.dev/docs)

### راه‌اندازی محیط توسعه

🔗 [https://reactnative.dev/docs/set-up-your-environment](https://reactnative.dev/docs/set-up-your-environment)

### مستندات Expo

🔗 [https://docs.expo.dev](https://docs.expo.dev)

---

## 🤝 مشارکت

در صورت تمایل می‌توانید پروژه را **Fork** کرده و با ارسال **Pull Request** در توسعه آن مشارکت کنید.

---

## 📄 لایسنس

این پروژه تحت لایسنس **MIT** منتشر شده است.

---

<div align="center">


**React Native Developer**

⭐ اگر این پروژه برای شما مفید بود، لطفاً به آن **Star** بدهید.

ساخته شده با ❤️ توسط **React Native + Expo**

</div>
