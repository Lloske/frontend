import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ContractualData } from '../models/contractual-data';
import { PersonalData, PersonnalDataSideList } from '../models/personal-data';
@Injectable({
  providedIn: 'root'
})
export class UserPersonnalDataService {

  private _url: string = this._urlBase+'/api/UserPersonnalInformation';

  constructor(private _httpClient: HttpClient, 
    @Inject('urlBackend') private _urlBase : string) { 
     this.loadUsers();
    }

    getAll() : Observable<PersonalData[]> {
      return this._httpClient.get<PersonalData[]>(this._url);
    }
    getAllSideList() : Observable<PersonnalDataSideList[]>{
      return this._httpClient.get<PersonnalDataSideList[]>(this._url);
    }
    getById(id : number) : Observable<PersonalData> {
      console.log(this._url)
      return this._httpClient.get<PersonalData>(`${this._url}/${id}`);
    }
    create(contractualData : PersonalData) : Observable<PersonalData> {
      return this._httpClient.post<PersonalData>(this._url, contractualData);
    }

    getByIdProfil(id : number) {
      this._httpClient.get<PersonalData>(`${this._url}/${id}`).subscribe({
        next : (data : PersonalData) => {
          this.subjet.next(data)
        }
      })
    } 
    subjet = new Subject<PersonalData>()
    
    // Création d'une liste d'utilisateur dans le service pour etre utilisée dans la sidebar et les pages updates user
    private userListSource = new BehaviorSubject<PersonalData[]>([]);
    userList = this.userListSource.asObservable();

    loadUsers() : void {
      this._httpClient.get<PersonalData[]>(this._url).subscribe(users => {
        this.userListSource.next(users);
      });
    }
    
}
