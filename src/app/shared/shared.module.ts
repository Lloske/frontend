import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';

/* Instructions pour créer un nouveau module :
 * 
 * 1. Se positionner dans le dossier parent du nouveau module.
 * 
 * 2. Exécutez la commande ci-dessous pour générer le nouveau module :
 * 
 *    ng g m [nom-du-sous-dossier] --module=[nom-du-module-parent] --routing
 * 
 * Remarques :
 * - Ne mettez pas de double crochets [] dans la commande.
 */


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
