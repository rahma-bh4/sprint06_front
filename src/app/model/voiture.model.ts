import { Marque } from "./marque.model";

export class Voiture { 
    idVoiture? : number; 
    nomVoiture? : string; 
    prixVoiture? : number; 
    dateCreation? : Date ; 
    marque!:Marque;
    email!:string;
    enable!:boolean;
    } 