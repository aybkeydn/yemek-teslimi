# 🍴 Yemek Teslimi Projesi

Bu proje, bir yemek teslimi uygulamasının **backend** ve **frontend** altyapısını içermektedir. Backend, sipariş ve kullanıcı yönetimi gibi işlemleri yönetirken, frontend kullanıcı arayüzü sağlar.

## 📂 Proje Yapısı

### 🔧 Backend
- **Teknolojiler**: Node.js, Express.js, MongoDB
- **Dizinler**:
  - `controllers/` 📜: İş mantığı ve veri işleme fonksiyonları
  - `routes/` 🌐: API rotaları
  - `models/` 🗂️: Veritabanı şemaları
  - `middleware/` 🔒: Orta katman işlevleri (ör. kimlik doğrulama)
  - `.env` 🛠️: Çevresel değişkenler için ayarlar

### 🎨 Frontend
- **Teknolojiler**: React, TailwindCSS, Vite
- **Dizinler**:
  - `src/` 💻: Ana kaynak kodları
  - `public/` 🌍: Genel erişilebilir statik dosyalar
  - `context/` 🧠: Uygulama durum yönetimi

## 🚀 Kurulum ve Çalıştırma

### Gereksinimler
- Node.js (v16 veya üzeri)
- MongoDB (yerel veya bulut tabanlı bir veritabanı)

### Backend Kurulumu
1. Backend klasörüne gidin:
   ```bash
   cd backend
   ```
2. Bağımlılıkları yükleyin:
   ```bash
   npm install
   ```
3. `.env` dosyasını doldurun. Örnek bir dosya aşağıdaki gibidir:
   ```env
   MONGO_URI=mongodb://localhost:27017/yemekteslim
   JWT_SECRET=supersecretkey
   ```
4. Backend sunucusunu başlatın:
   ```bash
   npm start
   ```

### Frontend Kurulumu
1. Frontend klasörüne gidin:
   ```bash
   cd frontend
   ```
2. Bağımlılıkları yükleyin:
   ```bash
   npm install
   ```
3. Frontend sunucusunu başlatın:
   ```bash
   npm run dev
   ```

### 🌐 Proje Çalıştırma
1. Hem backend hem de frontend sunucularını çalıştırdıktan sonra tarayıcıdan aşağıdaki URL'ye gidin:
   ```
   http://localhost:3000
   ```

## ✨ Özellikler
- **Kullanıcı Yönetimi** 👥: Kullanıcı kayıt, giriş, ve profil yönetimi
- **Sipariş Yönetimi** 📦: Yemek siparişi oluşturma, güncelleme ve görüntüleme
- **Ödeme** 💳: Güvenli ödeme entegrasyonu

## 🤝 Katkıda Bulunma
Katkıda bulunmak isterseniz, lütfen bir pull request gönderin veya bir issue açın.

## 📜 Lisans
Bu proje MIT lisansı ile lisanslanmıştır.

