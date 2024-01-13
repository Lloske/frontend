export interface PersonalData {
    Id :  number,
    Firstname : string,
    Lastname : string,
    Payroll_identity : string,
    Email : string
    Phone : string
    Is_in_employee_registrer : boolean,
    Is_archived : boolean,
    Password_hash : string,
}

export interface PersonnalDataSideList {
  Id : number
  Firstname : string
  Lastname : string
// Ramener le role de l'utilisateur depuis la table workplaces_job_position
}
