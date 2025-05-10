import { Routes } from '@angular/router';
import { VoituresComponent } from './voitures/voitures.component';
import { AddVoitureComponent } from './add-voiture/add-voiture.component';
import { UpdateVoitureComponent } from './update-voiture/update-voiture.component';
import { RechercheParMarqueComponent } from './recherche-par-marque/recherche-par-marque.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { VoitureGuard } from './voiture.guard';
import { ListeMarquesComponent } from './liste-marques/liste-marques.component';
import { RegisterComponent } from './register/register.component';
import { VerifEmailComponent } from './verif-email/verif-email.component';

export const routes: Routes = [
  {path: "voitures", component: VoituresComponent},
  {path: "add-voiture", component: AddVoitureComponent, canActivate: [VoitureGuard]},
  {path: "updateVoiture/:id", component: UpdateVoitureComponent, canActivate: [VoitureGuard]},
  {path: "rechercheParMarque", component: RechercheParMarqueComponent},
  {path: "rechercheParNom", component: RechercheParNomComponent},
  {path: "login", component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: "app-forbidden", component: ForbiddenComponent},
  {path: "listeMarques", component: ListeMarquesComponent},
  {path: 'verifEmail', component: VerifEmailComponent},
  {path: "", redirectTo: "voitures", pathMatch: "full"}
];