import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contractual-data',
  templateUrl: './contractual-data.component.html',
  styleUrls: ['./contractual-data.component.scss']
})
export class ContractualDataComponent {

  contractualDataForm : FormGroup;

  constructor(private _fb: FormBuilder) {
    this.contractualDataForm = this._fb.group({
      firstname : [null, [Validators.required, Validators.maxLength(100), Validators.pattern(/^[\D]*$/)] , []],
      lastname : [null, [Validators.required, Validators.maxLength(100), Validators.pattern(/^[\D]*$/)] , []],
      payroll_identity : [null, [Validators.maxLength(5)] , []],
      email : [null, [Validators.required, Validators.email]],
      phone : [null, [Validators.required, Validators.pattern(/^(((\+|00)32[ ]?(?:\(0\)[ ]?)?)|0){1}(4(60|[789]\d)\/?(\s?\d{2}\.?){2}(\s?\d{2})|(\d\/?\s?\d{3}|\d{2}\/?\s?\d{2})(\.?\s?\d{2}){2})$/)] , []],
      workplace_main : [null, [] , []],
      workplace_secondary : [null, [] , []],
      permission_level : [null, [Validators.required] , []],
      visibility : [null, [Validators.required] , []],
      //team n'est pas UN control mais un tableau avec plusieurs controls
      team : this._fb.array([]), // Pas sur qu'il faille mettre cela. Je pense qu'une requete backend pour afficher le tableau est bien
    })
  }

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
    console.log(this.contractualDataForm.value);    
  }
  //getter pour récupérer les hobbies de notre FormGroup comme étant un FormArray
  get team() : FormArray {
    return this.contractualDataForm.get('team') as FormArray;
  }
}
  

