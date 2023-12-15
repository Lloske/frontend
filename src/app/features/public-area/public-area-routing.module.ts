import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PricingComponent } from './pricing/pricing.component';

/* Création du routing-module
 * Ce `routing module` a été généré automatiquement par la commande :
 * 
 *    ng g m [nom-du-sous-dossier] --module=[nom-du-module-parent] --routing
 * 
 * Pour des instructions détaillées sur la création de ce module et la commande utilisée,
 * veuillez vous référer au commentaire situé dans le fichier du module associé.
 */


const routes: Routes = [
  { path : "home", component : HomeComponent},
  { path : "logIn", component : LoginComponent},
  { path : "pricing", component : PricingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicAreaRoutingModule { }
