import { Component,OnInit } from '@angular/core';
import { Voiture } from '../model/voiture.model';
import { ActivatedRoute, Router } from '@angular/router';
import { VoitureService } from '../services/voiture.service';
import { Marque } from '../model/marque.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-voiture',
  templateUrl: './update-voiture.component.html',
  styles: ``
})
export class UpdateVoitureComponent implements OnInit {
  currentVoiture=new Voiture();
  marques!:Marque[];
  updatedMarId!:number;
  myForm!:FormGroup;
  constructor(private activatedRoute: ActivatedRoute,
       private voitureService:VoitureService,
       private router :Router,
       private formBuilder:FormBuilder){

       }
       ngOnInit()
       {
        this.voitureService.listeMarques().
subscribe(cats => {this.marques = cats._embedded.marques;
console.log(cats);
});
this.voitureService.consulterVoiture(this.activatedRoute.snapshot.params['id']).
subscribe( prod =>{ this.currentVoiture = prod; 
this.updatedMarId = this.currentVoiture.marque.idMar;
} ) ;
 
        this.myForm=this.formBuilder.group({
          idVoiture:['',[Validators.required]],
          email:['',[Validators.required,Validators.email]],
         nomVoiture:['',[Validators.required,Validators.minLength(5)]],
         prixVoiture:['',[Validators.required]],
         dateCreation:['',[Validators.required]],
         marque:['',[Validators.required]]
        });
          
       /* this.voitureService.consulterVoiture(this.activatedRoute.snapshot.params['id']).
        subscribe( prod =>{ this.currentVoiture = prod; } ) ;*/

       }
       updateVoiture() {
        this.currentVoiture.marque = this.marques.
        find(cat => cat.idMar == this.updatedMarId)!;
        this.voitureService.updateVoiture(this.currentVoiture).subscribe(prod => {
          this.router.navigate(['voitures']); }
          );
          
        }
  
}
