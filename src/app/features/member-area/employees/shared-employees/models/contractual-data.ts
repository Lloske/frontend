export interface ContractualData {
    Id : number;
    Contract_type : number;
    Employment_type : number;
    Job_title : string;
    Organization_entry_date : Date;
    Contract_start : Date;
    Probation_end_date : Date;
    Contract_end : Date;
    Status : number;
    Professional_category : number;
    Last_medical_checkup_date : string;
    FK_id_user_personnal_information : string;
}
