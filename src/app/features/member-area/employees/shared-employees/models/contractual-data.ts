export interface ContractualData {
    Id : number;
    Contract_type : string;
    Employment_type : string;
    Job_title : string;
    Organization_entry_date : Date;
    Contract_start : Date;
    Probation_end_date : Date;
    Contract_end : Date;
    Status : string;
    Professional_category : string;
    Last_medical_checkup_date : string;
    FK_id_user_personnal_information : number;
}
