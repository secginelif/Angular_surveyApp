import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Uye } from '../models/uye';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  returnUrl: string;
  constructor(
    public servis: DataService,
    public route: ActivatedRoute,
    public router: Router,
    
  ) { 
      
  }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || 'admin'
  }

  GirisYap(k: string, p: string) {
    this.servis.UyeLogin(k, p).subscribe((d: Uye[]) => {
      if (d.length > 0) {
        var yetki = [];
        if (d[0].admin == 1) {
          yetki.push("Uye");
          yetki.push("Admin");
        } else {
          yetki.push("Uye");
        }
        localStorage.setItem("token", this.servis.ParolaUret(64));
        localStorage.setItem("uyeYetkileri", JSON.stringify(yetki));
        this.router.navigateByUrl(this.returnUrl);
      }
    });
  }

}
