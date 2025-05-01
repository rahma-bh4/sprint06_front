import { Component,OnInit } from '@angular/core';
import { Voiture } from '../model/voiture.model';
import { VoitureService } from '../services/voiture.service';
import { Router } from '@angular/router';
import { Marque } from '../model/marque.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-voiture',
  templateUrl: './add-voiture.component.html'
  
})
export class AddVoitureComponent implements OnInit {
  newVoiture= new Voiture(); 
  marques!:Marque[]
  newIdMarque!:number;
  newMarque!:Marque;
  myForm!:FormGroup;
  constructor(private voitureService: VoitureService,
    private router :Router,
    private formBuilder:FormBuilder){   } 
  ngOnInit(): void {
    
    this.voitureService.listeMarques().subscribe({
      next:
      (cats )=> {this.marques = cats._embedded.marques;
    },
    error:(err)=>{
    console.error('Erreur ',err);},

}); 
    this.myForm=this.formBuilder.group({
      
      email:['',[Validators.required,Validators.email]],
     nomVoiture:['',[Validators.required,Validators.minLength(5)]],
     prixVoiture:['',[Validators.required,Validators.min(1)]],
     dateCreation:['',[Validators.required]],
     marque:['',[Validators.required]]
    });
    
  }
    addVoiture()
    {
      this.newVoiture.marque = this.marques.find(cat => cat.idMar == this.newIdMarque)!;
      this.voitureService.ajouterVoiture(this.newVoiture)
.subscribe(prod => {
console.log(prod);
this.router.navigate(['voitures']);
});


      
    }
}
