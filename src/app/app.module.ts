import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { PublicAreaModule } from './features/public-area/public-area.module';
import { MemberAreaModule } from './features/member-area/member-area.module';
import { AdminAreaModule } from './features/admin-area/admin-area.module';

import { environment } from 'src/environments/environment.development';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  /* Declarations :
  Utilisée pour déclarer les composants, les directives et les pipes qui appartiennent à ce module.
  Chaque composant, directive et pipe doit appartenir à un et un seul module.
  Angular ne permet pas de déclarer le même composant, directive ou pipe dans plusieurs modules.
  Dans l'exemple que vous avez fourni, AppComponent est déclaré dans le tableau des declarations.
  */
  declarations: [  
    AppComponent,
  ],
    /* Imports :
    Utilisée pour importer d'autres modules dans le module actuel.
    Quand vous importez des modules, vous pouvez utiliser les composants, directives et pipes qu'ils exposent.
    Cela permet de diviser l'application en modules fonctionnels et de réutiliser ces modules à travers l'application.
    Dans votre exemple, AppModule importe BrowserModule, AppRoutingModule, ainsi que les modules de domaine (PublicAreaModule, MemberAreaModule, AdminAreaModule, et SharedModule).
  */
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
  ],
  // 'providers' déclare les services disponibles dans toute l'application (injecteur racine).
  providers: [
    { provide : "urlBackend", useValue : environment.apiUrl+":"+environment.apiPort},
    // { provide : HTTP_INTERCEPTORS, useClass : AuthTokenInterceptor, multi : true },
  ],
  bootstrap: [AppComponent] // La ligne bootstrap: [AppComponent] dans le décorateur @NgModule de Angular sert à démarrer l'application Angular en indiquant le composant racine
})
export class AppModule { }
