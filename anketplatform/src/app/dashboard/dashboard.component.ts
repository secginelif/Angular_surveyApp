import { Kullanici } from './../models/kullanici';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Sonuc } from '../models/sonuc';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  kullanicilar: Kullanici[];
  secKayit: Kullanici = new Kullanici();
  sonuc: Sonuc = new Sonuc();
  constructor(
    public servis: DataService
  ) { }

  ngOnInit(): void {
    this.KullaniciListele();
    this.secKayit.id = 0;
  }

  KullaniciListele() {
    this.servis.KullaniciListele().subscribe((d: Kullanici[]) => {
      this.kullanicilar = d;
    });
  }
  Kaydet() {
    var tarih = new Date();
    if (this.secKayit.id == 0) {
      this.secKayit.id = Math.floor(Math.random() * 1000);


      this.servis.KullaniciEkle(this.secKayit).subscribe(d => {
        this.sonuc.islem = true;
        this.sonuc.mesaj = "Yeni Kullanıcı Eklendi";
        this.KullaniciListele();
        this.Vazgec();
      }, err => {
        this.sonuc.islem = false;
        this.sonuc.mesaj = "Hata Oluştu";
      });
    }
    else {
      this.servis.KullaniciDuzenle(this.secKayit).subscribe(d => {
        this.sonuc.islem = true;
        this.sonuc.mesaj = "Kullanıcı Bilgileri Düzenlendi";
        this.KullaniciListele();
        this.Vazgec();
      }, err => {
        this.sonuc.islem = false;
        this.sonuc.mesaj = "Hata Oluştu";
      });
    }
  }
  Duzenle(kullanici: Kullanici) {
    Object.assign(this.secKayit, kullanici);
  }
  Sil(kullanici: Kullanici) {
    this.servis.KullaniciSil(kullanici.id).subscribe(d => {
      this.sonuc.islem = true;
      this.sonuc.mesaj = "Kullanıcı Silindi";
      this.KullaniciListele();
      this.Vazgec();
    }, err => {
      this.sonuc.islem = false;
      this.sonuc.mesaj = "Hata Oluştu";
    });
  }
  Vazgec() {
    this.secKayit = new Kullanici();
    this.secKayit.id = 0;
  }

}
