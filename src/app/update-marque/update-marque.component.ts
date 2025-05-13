import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Marque } from '../model/marque.model';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-update-marque',
    templateUrl: './update-marque.component.html',
    styles: ``,
    standalone: true,
    imports: [FormsModule]
})
export class UpdateMarqueComponent implements OnInit{
  @Input()
  marque! : Marque;
  @Output()
marqueUpdated = new EventEmitter<Marque>();
@Input()
ajout!:boolean;


  ngOnInit(): void {
    console.log("ngOnInit du composant UpdateMarque ",this.marque);
    }
  saveMarque(){
      this.marqueUpdated.emit(this.marque);
      } 
  
      
}