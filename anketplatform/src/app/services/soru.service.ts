import { Injectable } from '@angular/core';
import { Soru } from '../models/soru';

@Injectable({
  providedIn: 'root'
})
export class SoruService {

  sorular:Soru[]=[
    {
      soru:"Covid Aşısı Oldunuz mu? ",
      cevap:[
        {option:'Biontech' },
        {option:'Sinovac' },
        {option:'Henüz Olmadım'  },
        {option:'Hayır,Düşünmüyorum' },
      ]
    },
    {
      soru:"Alınan Tedbirleri Yeterli Buluyor musunuz?",
      cevap:[
        {option:'Evet' },
        {option:'Hayır,Yetersiz'},
        {option:'Çok Fazla'},
        {option:'Bilmiyorum' }
      ]
    },
    {
      soru:"Sizce Covid-19 En Çok Hangi Yaş Grubunu Etkiliyor?",
      cevap:[
        {option:'65+ yaş Grubu'  },
        {option:'30-50 yaş Grubu' },
        {option:'18 yaş altı'  },
        {option:'18+ Gençler'  },
      ]
    },
    {
      soru:"Hiç Covid-19 Testi Yaptırdınız mı?",
      cevap:[
        {option:'Hayır' },
        {option:'Evet' },
        {option:'Gereksiz olduğunu Düşünüyorum'  },
        {option:'Bilmiyorum' },
      ]
    },
    {
      soru:"Maske ve Mesafeye Uyuyor musunuz?",
      cevap:[
        {option:'Evet,Fazlasıyla' },
        {option:'Hayır' },
        {option:'Evet ama çok fazla değil'  },
        {option:'Herkes gibi'  },
      ]
    },
    {
      soru:"Covid-19 Vaka Sayıları Hakkında Ne Düşünüyorsunuz?",
      cevap:[
        {option:'Daha da Artıcaktır' },
        {option:'Bu seyirde devam eder'},
        {option:'Düşüceğini düşünüyorum'  },
        {option:'Bilmiyorum' },
      ]
    }
  ]

constructor() { }

getSoru(){
  return this.sorular;
}
}
