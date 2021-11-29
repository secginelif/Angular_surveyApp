import { Component, OnInit } from '@angular/core';
import { Sonuc } from '../models/sonuc';
import { SoruService } from './../services/soru.service';
import { Soru } from '../models/soru';

@Component({
  selector: 'app-soru',
  templateUrl: './soru.component.html',
  styleUrls: ['./soru.component.css']
})
export class SoruComponent implements OnInit {
  sorular:Soru[]=[];
  currentSoru=0;
  answerSelected=false;
  result=false;
  sonuc:Sonuc=new Sonuc();
  randomize:number;
  constructor(
    public soruServis:SoruService
  ) { }

  ngOnInit(): void {
    this.sorular=this.soruServis.getSoru();

    this.randomize=Math.floor(Math.random()*this.sorular.length);
  }
  
  onAnswer(option:string){
    this.answerSelected=true;
    setTimeout(() => {
      this.currentSoru++;
      this.answerSelected=false;
    }, 100);
    
    return option;
   
  }

  sonucGoster(){
    this.result=true;
    this.sonuc.mesaj="Anketi Tamamladığınız için Teşekkürler"
  }

}
