import { Injectable } from '@angular/core';
import { Voiture } from '../model/voiture.model';
import { Marque } from '../model/marque.model';
import { AuthService } from './auth.service';
import { Observable, of } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { MarqueWrapper } from '../model/marqueWrapped.model';
const httpOptions = {

  headers: new HttpHeaders( {'Content-Type': 'application/json'} )

};

@Injectable({
  providedIn: 'root'
})
export class VoitureService {
 
  apiURLMar: string = 'http://localhost:8081/voitures/mar';
apiURLMar2: string = 'http://localhost:8081/voitures/api/mar'

  voitures !: Voiture[]; 
  marques!:Marque[];
voituresRecherche!:Voiture[];
apiURL: string = 'http://localhost:8081/voitures/api';
  
constructor(private http : HttpClient,private authService : AuthService) { 
 /* this.marques=[
    {idMarque:1,nomMarque:"Renault"},
    {idMarque:2,nomMarque:"BMW"},
    {idMarque:3,nomMarque:"Audi"},
    {idMarque:4,nomMarque:"mercedes"}];
  
this.voitures = [ 
  {idVoiture:1 , nomVoiture:"Renault clio 4 ", prixVoiture:45000.00, dateCreation : new Date("11/02/2016"),marque :{idMarque:1,nomMarque:"Renault"},email:"renault.help@renault.fr",enable:false},
  {idVoiture : 2,   nomVoiture : "BMW X5",  prixVoiture : 450000, dateCreation : new Date("12/17/2010"),marque:{idMarque:2, nomMarque:"BMW"},email:"bmw.help@bmw.com",enable:false}, 
     {idVoiture : 3,   nomVoiture :"Audi Q5", prixVoiture : 100000, dateCreation : new Date("02/20/2020"),marque:{idMarque:3, nomMarque:"Audi"},email:"audi.help@audi.com",enable:false}  
];*/

}
listeVoitures(): Observable<Voiture[]> {
  
  return this.http.get<Voiture[]>(this.apiURL+"/all");  
} 
ajouterVoiture( v: Voiture):Observable<Voiture>{
  
  return this.http.post<Voiture>(this.apiURL+"/addvoit", v);

} 
supprimerVoiture( id:number){ 
   
  const url = `${this.apiURL}/delvoit/${id}`;

return this.http.delete(url);
}
voiture!:Voiture;
consulterVoiture(id:number):Observable <Voiture>{     
  const url = `${this.apiURL}/getbyid/${id}`;

return this.http.get<Voiture>(url);

  } 
  updateVoiture(v:Voiture):Observable<Voiture> 
  { 
   
return this.http.put<Voiture>(this.apiURL+"/updatevoit", v);


  } 
  trierVoitures(){ 
    this.voitures = this.voitures.sort((n1,n2) => { 
      if (n1.idVoiture! > n2.idVoiture!) { 
          return 1; 
      } 
     if (n1.idVoiture! < n2.idVoiture!) { 
          return -1; 
      } 
    return 0; 
  }); 
  } 
  listeMarques():Observable<MarqueWrapper> {
   
return this.http.get<MarqueWrapper>(this.apiURLMar
);
    }
    consulterMarque(id:number): Marque{
      return this.marques.find(marque => marque.idMar == id)!;
      }


      rechercherParMarque(idMarque: number): Observable<Voiture[]> {
        
        const url = `${this.apiURL}/voitsmar/${idMarque}`;
          //  return this.http.get<Voiture[]>(url);
            return this.http.get<Voiture[]>(url);
      }

  ajouterMarque( mar: Marque):Observable<Marque>{
    
    return this.http.post<Marque>(this.apiURLMar, mar);

  }
  rechercherParNom(nom: string):Observable< Voiture[]> {
    const url = `${this.apiURL}/voitsByName/${nom}`;
    return this.http.get<Voiture[]>(url);
    }  

}
