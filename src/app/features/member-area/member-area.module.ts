import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberAreaRoutingModule } from './member-area-routing.module';
import { MemberAreaComponent } from './member-area.component';
import { CalendarComponent } from './calendar/components/calendar/calendar.component';
import { NavbarMemberComponent } from './shared-member/navbar-member/navbar-member.component';

import { FullCalendarModule } from '@fullcalendar/angular';
import { AddEventModalComponent } from './calendar/components/modal/add-event-modal/add-event-modal.component';
import { UpdateEventModalComponent } from './calendar/components/modal/update-event-modal/update-event-modal.component';
import { ModalModule } from './calendar/components/modal/modal.module';

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
    MemberAreaComponent,
    CalendarComponent,
    NavbarMemberComponent,
  ],
  imports: [
    CommonModule,
    MemberAreaRoutingModule,
    FullCalendarModule,
    ModalModule,
  ], 
  bootstrap:[MemberAreaComponent]
})
export class MemberAreaModule { }
