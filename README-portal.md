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

## Not ve soru akisi (15 Eylul 2026 aksam)

- `musteri_portal/<uid>/notlar/<kalem>` {metin, ts, kim, mail, gitti}: tracker
  yazar (kartta kalem altindaki kutu). `mail:true` yalnizca durum Eksik ise;
  aksam turu gonderince `gitti` damgalanir. Portalda turuncu kutu.
- `musteri_portal/<uid>/sorular/<id>` {metin, kalem, ts | yanit, yanit_ts,
  yanit_kim, yanit_gitti, bildirildi}: metin/kalem/ts musteri yazar (yalnizca
  yeni kayit, 600 karakter, gunde 3, istemci sayar); yanit* tracker yazar.
- Aksam turu `ep-seo/portal-bildirim.py` (launchd `com.exportpartners.portal`,
  hafta ici 17:02, yedek@ ile okur ve damgalar): musteri basina EN FAZLA BIR
  mail (notlar + yanitlar, cc opr@), opr@ ve deniz@ adresine TEK ozet mail
  (yeni sorular). Mail dosyalari `ep-seo/veri/portal-mail/`, gonderim
  `claude -p` + Gmail (hat/portal-mail.txt). Chat ve anlik bildirim yok.
