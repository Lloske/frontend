import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HumanResourceService } from '../shared-employees/services/human-resource.service';

@Component({
  selector: 'app-human-resource',
  templateUrl: './human-resource.component.html',
  styleUrls: ['./human-resource.component.scss']
})
export class HumanResourceComponent {
  humanResourceForm : FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _humanResourceService : HumanResourceService,
    ) {
    this.humanResourceForm = this._fb.group({
      birthdate : [null, [Validators.required, Validators.maxLength(100), Validators.pattern(/^[\D]*$/)] , []],
      birthplace : [null, [Validators.required, Validators.maxLength(100), Validators.pattern(/^[\D]*$/)] , []],
      birthland : [null, [Validators.maxLength(5)] , []],
      nationality : [null, [Validators.required, Validators.email]],
      gender : [null, [Validators.required, Validators.pattern(/^(((\+|00)32[ ]?(?:\(0\)[ ]?)?)|0){1}(4(60|[789]\d)\/?(\s?\d{2}\.?){2}(\s?\d{2})|(\d\/?\s?\d{3}|\d{2}\/?\s?\d{2})(\.?\s?\d{2}){2})$/)] , []],
      address_street : [null, [] , []],
      adress_postal_code : [null, [] , []],
      adress_city : [null, [] , []],
      adress_country : [null, [Validators.required] , []],
      iban : [null, [Validators.required] , []],
      bic : [null, [] , []],
      social_security_number : [null, [Validators.required] , []],
      user_note : [null, [Validators.required] , []],
    })
  }

  createContractualData() {
    if (this.humanResourceForm.valid) {
      this._humanResourceService.create(this.humanResourceForm.value).subscribe({
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
      console.log(this.humanResourceForm.value); 
      console.log("FORMULAIRE VALIDE");
    } else {
      this.humanResourceForm.markAllAsTouched();
      console.log("FORMULAIRE INVALIDE");
    }
  };

  onSubmit() {
    console.log(this.humanResourceForm.value);    
  }
}
