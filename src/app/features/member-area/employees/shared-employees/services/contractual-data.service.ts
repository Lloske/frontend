import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContractualData } from '../models/contractual-data';

@Injectable({
  providedIn: 'root'
})
export class ContractualDataService {

  private _url: string = this._urlBase+'/UserPersonnalInformation';

  constructor(private _httpClient: HttpClient, 
    @Inject('urlBackend') private _urlBase : string) { }

    getAll() : Observable<ContractualData[]> {
      return this._httpClient.get<ContractualData[]>(this._url);
    }
    getById(id : number) : Observable<ContractualData> {
      console.log(this._url)
      return this._httpClient.get<ContractualData>(`${this._url}/${id}`);
    }
    create(contractualData : ContractualData) : Observable<ContractualData> {
      return this._httpClient.post<ContractualData>(this._url, contractualData);
    }
}
