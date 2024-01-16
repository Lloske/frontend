export interface PersonalData {
    id :  number,
    firstname : string,
    lastname : string,
    payroll_identity : string,
    email : string
    phone : string
    is_in_employee_registrer : boolean,
    is_archived : boolean,
    password_hash : string,
}

export interface PersonnalDataSideList {
  id : number
  firstname : string
  lastname : string
// Ramener le role de l'utilisateur depuis la table workplaces_job_position
}
