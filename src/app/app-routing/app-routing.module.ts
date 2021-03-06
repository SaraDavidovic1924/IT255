import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '../pages/home/home.component';
import {LoginComponent} from '../pages/login/login.component';
import {RegisterComponent} from '../pages/register/register.component';
import {DnevniUnosInsulinaComponent} from '../pages/dnevni-unos-insulina/dnevni-unos-insulina.component';
import {DnevniUnosGlikemijeComponent} from '../pages/dnevni-unos-glikemije/dnevni-unos-glikemije.component';
import {DnevnikComponent} from '../pages/dnevnik/dnevnik.component';

import {IzmeniKorisnikaComponent} from '../pages/izmeni-korisnika/izmeni-korisnika.component';
import {KorisniciComponent} from '../pages/korisnici/korisnici.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'dzi', component: DnevniUnosInsulinaComponent},
  {path: 'dzg', component: DnevniUnosGlikemijeComponent},
  {path: 'dnevnik', component: DnevnikComponent},
  {path: 'users', component: KorisniciComponent},
  {path: 'updateUser', component: IzmeniKorisnikaComponent}
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
