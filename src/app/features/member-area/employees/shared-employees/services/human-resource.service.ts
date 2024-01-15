import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { HumanResource } from '../models/human-resource';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HumanResourceService {

  private _url: string = this._urlBase+'/UserPersonnalInformation';

  constructor(private _httpClient: HttpClient, 
    @Inject('urlBackend') private _urlBase : string) { }

    getAll() : Observable<HumanResource[]> {
      return this._httpClient.get<HumanResource[]>(this._url);
    }
    getById(id : number) : Observable<HumanResource> {
      console.log(this._url)
      return this._httpClient.get<HumanResource>(`${this._url}/${id}`);
    }
    create(contractualData : HumanResource) : Observable<HumanResource> {
      return this._httpClient.post<HumanResource>(this._url, contractualData);
    }
}
