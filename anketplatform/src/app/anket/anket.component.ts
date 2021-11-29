import { Component, OnInit } from '@angular/core';
import { Sonuc } from '../models/sonuc';
import { Kayit } from '../models/kayit';
import { DataService } from '../services/data.service';

import { KayitSoru } from './../models/kayitsoru';
import { SoruService } from './../services/soru.service';

@Component({
  selector: 'app-anket',
  templateUrl: './anket.component.html',
  styleUrls: ['./anket.component.css']
})
export class AnketComponent implements OnInit {
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


  // sorular
  soruKayitListele() {
    this.servis.soruKayitListele().subscribe((d: KayitSoru[]) => {
      this.sorukayitlar = d;
    });
  }
}
