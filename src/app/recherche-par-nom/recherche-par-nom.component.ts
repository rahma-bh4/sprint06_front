import { Component,OnInit } from '@angular/core';
import { Marque } from '../model/marque.model';
import { Voiture } from '../model/voiture.model';
import { VoitureService } from '../services/voiture.service';
import { FormsModule } from '@angular/forms';
import { NgFor, DatePipe } from '@angular/common';
import { SearchFilterPipe } from '../search-filter.pipe';

@Component({
    selector: 'app-recherche-par-nom',
    templateUrl: './recherche-par-nom.component.html',
    styles: ``,
    standalone: true,
    imports: [FormsModule, NgFor, DatePipe, SearchFilterPipe]
})
export class RechercheParNomComponent implements OnInit {
  voitures:Voiture[]=[];
  marques:Marque[]=[];
  IdMarque!:number;
  allVoiture:Voiture[]=[];
  searchTerm!:string;
  constructor(private voitureService: VoitureService ){}
  ngOnInit()
  {
    this.voitureService.listeVoitures().subscribe((prods: Voiture[]) => {
      console.log(prods);
      this.voitures = prods;
    });
  }
 /* supprimerVoiture(v: Voiture) 
   { 
    let conf = confirm("Etes-vous sûr ?"); 
         if (conf) {
      this.voitureService.supprimerVoiture(v); 
      
   } }*/
      supprimerVoiture(v: Voiture) 
      { 
       let conf = confirm("Etes-vous sûr ?"); 
            if (conf) 
         this.voitureService.supprimerVoiture(v.idVoiture!).subscribe(() => {
           console.log("produit supprimé");
           
          }) ; 
      } 
   onKeyUp(filterText : string){
    this.voitures = this.allVoiture.filter(item =>
      item.nomVoiture && item.nomVoiture.toLowerCase().includes(filterText)
    );
    }
}
