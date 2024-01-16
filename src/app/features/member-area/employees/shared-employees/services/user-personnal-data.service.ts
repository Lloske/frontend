import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContractualData } from '../models/contractual-data';
import { PersonalData, PersonnalDataSideList } from '../models/personal-data';
@Injectable({
  providedIn: 'root'
})
export class UserPersonnalDataService {

  private _url: string = this._urlBase+'/api/UserPersonnalInformation';

  constructor(private _httpClient: HttpClient, 
    @Inject('urlBackend') private _urlBase : string) { }

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
    
}
