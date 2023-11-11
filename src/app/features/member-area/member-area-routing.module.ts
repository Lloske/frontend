import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/components/calendar/calendar.component';
import { AddEventModalComponent } from './calendar/components/modal/add-event-modal/add-event-modal.component';

/* Création du routing-module
 * Ce `routing module` a été généré automatiquement par la commande :
 * 
 *    ng g m [nom-du-sous-dossier] --module=[nom-du-module-parent] --routing
 * 
 * Pour des instructions détaillées sur la création de ce module et la commande utilisée,
 * veuillez vous référer au commentaire situé dans le fichier du module associé.
 */

const routes: Routes = [
  // Mettre un router outlet dans le .html afin de continuer à charger les routes enfant après un lazy loading.
  // Ne pas mettre de chemin vide car on a déja chargé le composant dans le routing parent (app-routing)
  { path : "calendar", component : CalendarComponent },
  { path : "calendar/addEvent", component : AddEventModalComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberAreaRoutingModule { }
