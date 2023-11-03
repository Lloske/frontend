# Lloske :busts_in_silhouette:

*Application Angular de gestion des employés et planification.*

![Status](https://img.shields.io/badge/status-active-success.svg)
![Platform](https://img.shields.io/badge/platform-Angular-red.svg)

Lloske simplifie la planification et la gestion des employés, offrant une interface intuitive pour visualiser les horaires, gérer les profils d'employés et assurer une sécurité renforcée. Inspirée de l'efficacité de Google Agenda, cette application est un outil incontournable pour toute organisation.

## Questions 

1. **Configuration du .gitignore** :
   - Le fichier `.gitignore` est-il correctement configuré?

2. **Configuration de routage dans app-routing.module.ts** :
   - La configuration dans `app-routing.module.ts` est-elle correcte?
   - Est-il nécessaire de laisser la partie `"component : MemberAreaComponent"` dans la configuration suivante ?
     ```typescript
     { path : "member-area", component : MemberAreaComponent , loadChildren : () => import("./features/member-area/member-area.module").then(m => m.MemberAreaModule) },
     ```

3. **Pertinence du module des fonctionnalités et du routing-module** :
   - Les `feature module` et `routing-module` sont-ils vraiment utiles ?

4. **Imports et déclarations dans @NgModule** :
   - Quels imports et déclarations sont nécessaires dans les décorateurs `@NgModule` des différents fichiers `.module.ts`?
   - En relation avec le `feature-module`, y a-t-il besoin de redéclarer certains imports dans le module enfant si nous décidons de supprimer ce module ?

5. **Nettoyage des imports** :
   - Comment nettoyer les imports inutiles en haut des fichiers de modules ?

6. **Vérification des modules/composants nécessaires** :
   - Quels modules ou composants sont essentiels pour le projet ? Demander au professeur si nécessaire.

## À faire

- [ ] Continuer le routing complet de l'application.
- [ ] Vérifier quels modules/composants sont nécessaires. S'assurer qu'aucun élément essentiel n'a été omis.
- [ ] Consulter le professeur pour confirmer les modules/composants requis.
