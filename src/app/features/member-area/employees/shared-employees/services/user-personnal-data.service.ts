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
    getById(id : number) : Observable<PersonalData> {
      return this._httpClient.get<PersonalData>(`${this._url}/${id}`);
    }
    create(contractualData : PersonalData) : Observable<PersonalData> {
      return this._httpClient.post<PersonalData>(this._url, contractualData);
    }
    
    // Création d'un tableau d'utilisateurs privé (_$userListSource) vide grâce au BehaviorSubject ([]). 
    // Création d'un observable $userList public qui contient la liste des utilisateurs. C'est à cet observable que va souscrire notre sidebar dans son NgOnInit()
    // Cette liste sera mise a jour lorsque l'on appelle la méthode loadUsers()
    private _$userListSource = new BehaviorSubject<PersonalData[]>([]);
    $userList = this._$userListSource.asObservable();
    
    // La méthode loadUsers() est appelée dans le constructeur du service.
    // Elle met à jour _$userListSource
    loadUsers() : void {
      this.getAll().subscribe(users => {
        // Le behavior subject permet d'activer le next quand on désire pour mettre a jours tos les truc qqui sont subscribe à l'obserbalbe
        this._$userListSource.next(users);
      });
    }    

    // getByIdProfil() est appelé dans la sidebar et transmet l'id de la personne sur qui l'on clique
    // Cela mets à jour le $subjet qui contient l'objet utilisateur de type PersonalData
    // $subjet est utilisé dans le construteur du formulaire du composant personal-data pour chargée les données de l'utilisateur selectionné
    // J'ai depuis lors rajouter un actualUser qui est utilisé dans le ngOnInit des formulaires. A voir comment adapté pour que cela soit plus propre
    $subjet = new Subject<PersonalData>()

    //Le actual user est utilisé dans les ngOnInit des formulaires. Sans cela, lorsque je change d'onglet, les données ne sont pas persistantes.
    // Je ne sais pas si c'est la bonne méthode mais cela fonctionne
    actualUser! : PersonalData;
    
    
    getByIdSidebar(id : number) {
      this.getById(id).subscribe({
        next : (data : PersonalData) => {
          this.actualUser = data
          this.$subjet.next(data)
          console.log(this.actualUser)
        },
        error : (data : PersonalData) => {
          console.log('getByIdSidebar(id) à rencontré une erreur ')
        }
      })
    } 
}
