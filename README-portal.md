# Musteri portali ve giris (15 Eylul 2026)

- `index.html`: Customer Tracker. Artik girisli: Firebase Authentication
  (e-posta + sifre), yalnizca admin e-postalari: deniz@, info@, opr@ Kaan (firebase-rules.json).
- `musteri/index.html`: musteri portali. Musteri kendi hesabiyla girer,
  yalnizca `musteri_portal/<uid>` dugumunu gorur: FDA Evrak Formu (14 kalem),
  evrak yukleme (data URL, 3 MB), her kalemde admin'in isaretledigi durum.
- `firebase-rules.json`: Realtime Database kurallari. Firebase konsolu >
  Realtime Database > Rules'a yapistirilir. Bargello/Molubon musteri
  panelleri eskisi gibi acik (kendi ozel linkleriyle calisiyorlar).
- Hesap acma: tracker'da musteri karti > "Portal hesabi ac" (ikincil
  Firebase uygulamasiyla createUser; admin oturumu dusmez).
- Yedek: ep-seo/tracker-yedek.py `yedek@exportpartners.com.tr` hesabiyla
  (sifre ~/.config/ep-seo/firebase-yedek.json) kimlikli okur.
