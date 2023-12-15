import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicAreaComponent } from './features/public-area/public-area.component';
import { MemberAreaComponent } from './features/member-area/member-area.component';
import { AdminAreaComponent } from './features/admin-area/admin-area.component';


const routes: Routes = [

  //QUESTION: !!!!!!! VERIFIER SI IL FAUT CHARGER OU NON LE COMPONENT DANS LE PATH ET POURQUOI? !!!!!!!!!!!!!!!!!!
  
  { path : "", redirectTo: "/public-area/home", pathMatch : "full" }, // Redirige la racine de l'application vers "/public-area" avec une correspondance de chemin exacte (pas pathMath: "prefix" sinon tout ce qui se site apres la racine "/"" redirige vers "/public-area").
  { path : "member-area", component : MemberAreaComponent, loadChildren : () => import("./features/member-area/member-area.module").then(m => m.MemberAreaModule) }, 
  // Ne pas mettre de "component : Member-area-composant" entre le path et le loadchildren si on veux met une route vide dans le composant lazy loader. 
  // Si on met une route vide dans le composant lazy loader et que on charge déja le composant au niveau du routing du parent, on aura un double affichage.
  // Dans notre cas on a préféré charger le composant au niveau du parent (ici, component : MemberAreaComponent) donc on ne va pas mettre de chemin vide
  // "path : "", component : ... dans notre enfant (member-area-routing)
  { path : "public-area", component : PublicAreaComponent , loadChildren : () => import("./features/public-area/public-area.module").then(m => m.PublicAreaModule) },
  { path : "admin-area", component : AdminAreaComponent , loadChildren : () => import("./features/admin-area/admin-area.module").then(m => m.AdminAreaModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
