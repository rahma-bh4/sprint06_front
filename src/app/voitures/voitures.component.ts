import { Component , OnInit} from '@angular/core';
import { Voiture } from '../model/voiture.model';
import { VoitureService } from '../services/voiture.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-voitures',
  templateUrl: './voitures.component.html'
  
})
export class VoituresComponent implements OnInit {
  voitures ?: Voiture[];
  constructor(private voitureService: VoitureService,
    public authService: AuthService)
    { 
    
}
ngOnInit(): void {

  this.voitureService.listeVoitures().subscribe(prods => {
    console.log(prods);
    this.voitures = prods;
    });
    
}

chargerVoitures(){
  this.voitureService.listeVoitures().subscribe(prods => {
    console.log(prods);
    this.voitures = prods;
    }); 
}
supprimerVoiture(v: Voiture) 
   { 
    let conf = confirm("Etes-vous sûr ?"); 
         if (conf) 
      this.voitureService.supprimerVoiture(v.idVoiture!).subscribe(() => {
        console.log("produit supprimé");
        this.chargerVoitures();
       }) ; 
   } 
}
