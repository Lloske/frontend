export interface ContractualData {
    id : number;
    contract_type : string;
    employment_type : string;
    job_title : string;
    organization_entry_date : Date;
    contract_start : Date;
    probation_end_date : Date;
    contract_end : Date;
    status : string;
    professional_category : string;
    last_medical_checkup_date : string;
    fK_id_user_personnal_information : number;
}
