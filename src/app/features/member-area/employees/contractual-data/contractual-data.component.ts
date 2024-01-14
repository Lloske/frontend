import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContractualDataService } from '../shared-employees/services/contractual-data.service';

@Component({
  selector: 'app-contractual-data',
  templateUrl: './contractual-data.component.html',
  styleUrls: ['./contractual-data.component.scss']
})
export class ContractualDataComponent {
  contractualDataForm : FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _contractualDataService : ContractualDataService,
    ) {
    this.contractualDataForm = this._fb.group({
      contract_type : [null, [Validators.required, Validators.maxLength(100), Validators.pattern(/^[\D]*$/)] , []],
      lastname : [null, [Validators.required, Validators.maxLength(100), Validators.pattern(/^[\D]*$/)] , []],
      employment_type : [null, [Validators.maxLength(5)] , []],
      job_title : [null, [Validators.required, Validators.email]],
      organization_entry_date : [null, [Validators.required, Validators.pattern(/^(((\+|00)32[ ]?(?:\(0\)[ ]?)?)|0){1}(4(60|[789]\d)\/?(\s?\d{2}\.?){2}(\s?\d{2})|(\d\/?\s?\d{3}|\d{2}\/?\s?\d{2})(\.?\s?\d{2}){2})$/)] , []],
      contract_start_date : [null, [] , []],
      contract_start_time : [null, [] , []],
      probation_end_date : [null, [] , []],
      contract_end : [null, [Validators.required] , []],
      status : [null, [Validators.required] , []],
      professional_category : [null, [] , []],
      last_medical_checkup_date : [null, [Validators.required] , []],
      fK_id_user_personnal_information : [null, [Validators.required] , []],
    })
  }

  createContractualData() {
    if (this.contractualDataForm.valid) {
      this._contractualDataService.create(this.contractualDataForm.value).subscribe({
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
      console.log(this.contractualDataForm.value); 
      console.log("FORMULAIRE VALIDE");
    } else {
      this.contractualDataForm.markAllAsTouched();
      console.log("FORMULAIRE INVALIDE");
    }
  };

  onSubmit() {
    console.log(this.contractualDataForm.value);    
  }

}