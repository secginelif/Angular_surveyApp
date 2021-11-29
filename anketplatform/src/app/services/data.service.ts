import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Kayit } from '../models/kayit';
import { Kullanici } from '../models/kullanici';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  public apiUrl = "http://localhost:3000/";

  

constructor(
  public http: HttpClient
) { }
KayitListele() {
  return this.http.get(this.apiUrl + "kayitlar");
}
KayitById(id: number) {
  return this.http.get(this.apiUrl + "kayitlar/" + id);
}
KayitEkle(kayit: Kayit) {
  return this.http.post(this.apiUrl + "kayitlar", kayit);
}
KayitDuzenle(kayit: Kayit) {
  return this.http.put(this.apiUrl + "kayitlar/" + kayit.id, kayit);
}
KayitSil(id: number) {
  return this.http.delete(this.apiUrl + "kayitlar/" + id);
}

// Kullanıclar
KullaniciListele() {
  return this.http.get(this.apiUrl + "kullanicilar");
}
KullaniciById(id: number) {
  return this.http.get(this.apiUrl + "kullanicilar/" + id);
}
KullaniciEkle(kullanici: Kullanici) {
  return this.http.post(this.apiUrl + "kullanicilar", kullanici);
}
KullaniciDuzenle(kullanici: Kullanici) {
  return this.http.put(this.apiUrl + "kullanicilar/" + kullanici.id, kullanici);
}
KullaniciSil(id: number) {
  return this.http.delete(this.apiUrl + "kullanicilar/" + id);
}

// SORULAR

soruKayitListele(){
  return this.http.get(this.apiUrl + "sorukayitlar");
}

// LoginPage

OturumKontrol() {
  var token = localStorage.getItem("token");
  if (token) {
    return true;
  } else {
    return false;
  }
}
YetkiKontrol(yetkiler:any) {
  var sonuc: boolean = false;
  var uyeYetkileri: string[] = JSON.parse(localStorage.getItem("uyeYetkileri"));
  if (uyeYetkileri) {
    yetkiler.forEach((element:any) => {
      if (uyeYetkileri.indexOf(element) > -1) {
        sonuc = true;
        return false;
      }
    });
  }
  return sonuc;

}
UyeLogin(k: string, p: string) {
  return this.http.get(this.apiUrl + "uye?kadi=" + k + "&parola=" + p);
}
ParolaUret(s: number) {
  var st = "qwertyuiopasdfghjklzxcvbnm0123456789";
  var p = "";
  for (let i = 0; i < s; i++) {
    var r = Math.floor(Math.random() * st.length);
    p += st.charAt(r);
  }

  return p;
}
}
