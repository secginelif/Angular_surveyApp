import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SoruComponent } from './soru/soru.component';
import { AuthGuard } from './services/auth.guard';
import { LoginComponent } from './login/login.component';
import { AnketComponent } from './anket/anket.component';


const routes: Routes = [
  { path: 'admin', component: HomeComponent
 },
  { path: 'panel', component: DashboardComponent ,
  },
  {path:'anketgoster',component:SoruComponent},
  { path: '', component: LoginComponent },
  { path: 'anketsayfasi', component: AnketComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
