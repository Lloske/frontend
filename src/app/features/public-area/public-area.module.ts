import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicAreaRoutingModule } from './public-area-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PublicAreaComponent } from './public-area.component';
import { NavbarPublicComponent } from './shared-public/navbar-public/navbar-public.component';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PricingComponent } from './pricing/pricing.component'; // Pour la nav-bar public

/* Instructions pour créer un nouveau module :
 * 
 * 1. Se positionner dans le dossier parent du nouveau module.
 * 
 * 2. Exécutez la commande ci-dessous pour générer le nouveau module :
 * 
 *    ng g m [nom-du-sous-dossier] --module=[nom-du-module-parent] --routing
 *    Le paramètre --module enregistre le nouveau module dans un module parent spécifié, tandis que --routing génère un module de routage associé pour le nouveau module.
 * 
 * Remarques :
 * - Ne mettez pas de double crochets [] dans la commande.
 */


@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    PublicAreaComponent,
    NavbarPublicComponent,
    PricingComponent,
  ],
  imports: [
    CommonModule,
    PublicAreaRoutingModule,
    NgbModule
  ]
})
export class PublicAreaModule { }
