import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserPersonnalDataService } from '../shared-employees/services/user-personnal-data.service';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.scss']
})
export class PersonalDataComponent {
  personalDataForm : FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _userPersonnalDataService : UserPersonnalDataService,
    ) {
    this.personalDataForm = this._fb.group({
      firstname : [null, [Validators.required, Validators.maxLength(100), Validators.pattern(/^[\D]*$/)] , []],
      lastname : [null, [Validators.required, Validators.maxLength(100), Validators.pattern(/^[\D]*$/)] , []],
      payroll_identity : [null, [Validators.maxLength(5)] , []],
      email : [null, [Validators.required, Validators.email]],
      phone : [null, [Validators.required, Validators.pattern(/^(((\+|00)32[ ]?(?:\(0\)[ ]?)?)|0){1}(4(60|[789]\d)\/?(\s?\d{2}\.?){2}(\s?\d{2})|(\d\/?\s?\d{3}|\d{2}\/?\s?\d{2})(\.?\s?\d{2}){2})$/)] , []],
      rup : [null, [], []],
      workplace_main : [null, [] , []],
      workplace_secondary : [null, [] , []],
      permission_level : [null, [Validators.required] , []],
      visibility : [null, [Validators.required] , []],
      //team n'est pas UN control mais un tableau avec plusieurs controls
      // team : this._fb.array([]), // Pas sur qu'il faille mettre cela. Je pense qu'une requete backend pour afficher le tableau est bien
    })
  }

  createUserPersonnal() {
    if (this.personalDataForm.valid) {
      this._userPersonnalDataService.create(this.personalDataForm.value).subscribe({
        next : (response) => {
          console.log("Utilisateur créé avec succès:", response);
        },
        error : (error) => {
          console.error("Une erreur s'est produite lors de la création de l'utilisateur:", error);
        },
        complete : () =>  {
          console.log("Création de l'utilisateur terminée.");
        },
      });
      console.log(this.personalDataForm.value); 
      console.log("FORMULAIRE VALIDE");
    } else {
      this.personalDataForm.markAllAsTouched();
      console.log("FORMULAIRE INVALIDE");
    }
  };






  // !! A ADAPTER !! Listes temporaires d'établissements/niveau de permission et équipes. En faire venir une du back  
  tempMainWorkplacesList: string[] = [
    'Technobel Ciney',
    'Technobel Arlon',
    'Technobel Louvain-la-Neuve',
  ];
  tempSecondaryWorkplacesList: string[] = [
    'Technobel Ciney',
    'Technobel Arlon',
    'Technobel Louvain-la-Neuve',
  ];
  tempPermission_levelList: string[] = [
    'Administrateur système',
    'Planificateur avancé',
    'Employé standard',
  ];
  tempTeamList: string[] = [
    'Direction',
    'Employés',
    'Ouvriers',
  ];

  onSubmit() {
    console.log(this.personalDataForm.value);    
  }


  //getter pour récupérer les hobbies de notre FormGroup comme étant un FormArray
  // get team() : FormArray {
  //   return this.personalDataForm.get('team') as FormArray;
  // }
}
