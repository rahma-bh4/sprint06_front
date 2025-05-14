import { Component, OnInit } from '@angular/core';
import { VoitureService } from '../services/voiture.service';
import { Marque } from '../model/marque.model';
import { UpdateMarqueComponent } from '../update-marque/update-marque.component';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-liste-marques',
    templateUrl: './liste-marques.component.html',
    styles: ``,
    standalone: true,
    imports: [UpdateMarqueComponent, NgFor]
})
export class ListeMarquesComponent implements OnInit {
  marques : Marque[]=[];
  updateMarque:Marque={"idMar":null,"nomMar":""};
  ajout:boolean=true;

  constructor(private voitureService : VoitureService) { }
  ngOnInit(): void {
    this.chargerMarque();
  
}
marqueUpdated(cat:Marque):void{
 
 
  // Si ajout est vrai, ajouter la marque
  this.voitureService.ajouterMarque(cat).subscribe( ()=> this.chargerMarque());
/* else {
  // Si ajout est faux, modifier la marque existante
  const index = this.marques.findIndex(m => m.idMar === cat.idMar);
  this.marques[index] = cat;}*/
 this.updateMarque={"idMar":null,"nomMar":""};
 this.ajout=true;
  


/*this.chargerMarque();
this.ajout=true;
 */
  }
  
chargerMarque(){
  this.voitureService.listeMarques().subscribe(cats => {this.marques = cats._embedded.marques;
    console.log(cats);
    }); 
}
UpdateMar(mar:Marque) {
  this.updateMarque=mar;
  this.ajout=false;
  }
  



}