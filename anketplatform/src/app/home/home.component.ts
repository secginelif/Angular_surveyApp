import { Component, OnInit } from '@angular/core';
import { Sonuc } from '../models/sonuc';
import { Kayit } from '../models/kayit';
import { DataService } from '../services/data.service';

import { KayitSoru } from './../models/kayitsoru';
import { SoruService } from './../services/soru.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  kayitlar: Kayit[];
  secKayit: Kayit = new Kayit();
  sonuc: Sonuc = new Sonuc();

  sorukayitlar:KayitSoru[];
  constructor(
    public servis: DataService,
    public soruData:SoruService
  ) { }

  ngOnInit(): void {
    this.KayitListele();
    this.secKayit.id = 0;

    this.soruKayitListele();
  }

  KayitListele() {
    this.servis.KayitListele().subscribe((d: Kayit[]) => {
      this.kayitlar = d;
    });
  }
  Kaydet() {
    var tarih = new Date();
    if (this.secKayit.id == 0) {
      this.secKayit.id = Math.floor(Math.random() * 1000);
      this.secKayit.kayTarih = tarih.getTime().toString();
      this.secKayit.duzTarih = tarih.getTime().toString();

      this.servis.KayitEkle(this.secKayit).subscribe(d => {
        this.sonuc.islem = true;
        this.sonuc.mesaj = "Yeni Anket Eklendi";
        this.KayitListele();
        this.Vazgec();
      }, err => {
        this.sonuc.islem = false;
        this.sonuc.mesaj = "Hata Oluştu";
      });
    }
    else {
      this.secKayit.duzTarih = tarih.getTime().toString();
      this.servis.KayitDuzenle(this.secKayit).subscribe(d => {
        this.sonuc.islem = true;
        this.sonuc.mesaj = "Anket Bilgileri Düzenlendi";
        this.KayitListele();
        this.Vazgec();
      }, err => {
        this.sonuc.islem = false;
        this.sonuc.mesaj = "Hata Oluştu";
      });
    }
  }
  Duzenle(kayit: Kayit) {
    Object.assign(this.secKayit, kayit);
  }
  Sil(kayit: Kayit) {
    this.servis.KayitSil(kayit.id).subscribe(d => {
      this.sonuc.islem = true;
      this.sonuc.mesaj = "Anket Silindi";
      this.KayitListele();
      this.Vazgec();
    }, err => {
      this.sonuc.islem = false;
      this.sonuc.mesaj = "Hata Oluştu";
    });
  }
  Vazgec() {
    this.secKayit = new Kayit();
    this.secKayit.id = 0;
  }

  // sorular
  soruKayitListele() {
    this.servis.soruKayitListele().subscribe((d: KayitSoru[]) => {
      this.sorukayitlar = d;
    });
  }
}
