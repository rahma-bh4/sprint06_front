import { Component ,OnInit} from '@angular/core';
import { Voiture } from '../model/voiture.model';
import { VoitureService } from '../services/voiture.service';
import { Marque } from '../model/marque.model';

@Component({
  selector: 'app-recherche-par-marque',
  templateUrl: './recherche-par-marque.component.html',
  styles: ``
})
export class RechercheParMarqueComponent implements OnInit{
  voitures!:Voiture[];
  marques!:Marque[];
  IdMarque!:number;
  constructor(private voitureService: VoitureService ){}

  ngOnInit():void{
    this.voitureService.listeMarques().subscribe(cats => {this.marques = cats._embedded.marques;
      console.log(cats);
      }); 
    this.voitures=[];
  }
  onChange()
  {
    this.voitureService.rechercherParMarque(this.IdMarque).
      subscribe(prods =>{this.voitures=prods});

  }
 /* supprimerVoiture(v: Voiture) 
   { 
    let conf = confirm("Etes-vous sûr ?"); 
         if (conf) {
      this.voitureService.supprimerVoiture(v); 
      this.voitureService.rechercherParMarque(this.IdMarque);
   } }*/
      supprimerVoiture(v: Voiture) 
      { 
       let conf = confirm("Etes-vous sûr ?"); 
            if (conf) 
         this.voitureService.supprimerVoiture(v.idVoiture!).subscribe(() => {
           console.log("produit supprimé");
           this.voitureService.rechercherParMarque(this.IdMarque);
          }) ; 
}}
