import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminAreaRoutingModule } from './admin-area-routing.module';
import { AdminAreaComponent } from './admin-area.component';

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
    AdminAreaComponent
  ],
  imports: [
    CommonModule,
    AdminAreaRoutingModule
  ]
})
export class AdminAreaModule { }
