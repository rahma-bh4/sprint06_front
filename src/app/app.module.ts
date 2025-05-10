import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VoituresComponent } from './voitures/voitures.component';
import { AddVoitureComponent } from './add-voiture/add-voiture.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateVoitureComponent } from './update-voiture/update-voiture.component';
import { RechercheParMarqueComponent } from './recherche-par-marque/recherche-par-marque.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { ListeMarquesComponent } from './liste-marques/liste-marques.component';
import { UpdateMarqueComponent } from './update-marque/update-marque.component';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { TokenInterceptor } from './services/token.interceptor';
import { RegisterComponent } from './register/register.component';
import { VerifEmailComponent } from './verif-email/verif-email.component';

@NgModule({ declarations: [AppComponent],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule, // Required for Toastr
        ToastrModule.forRoot({
            positionClass: 'toast-bottom-right',
            preventDuplicates: true,
        }), VoituresComponent,
        AddVoitureComponent,
        UpdateVoitureComponent,
        RechercheParMarqueComponent,
        RechercheParNomComponent,
        SearchFilterPipe,
        LoginComponent,
        ForbiddenComponent,
        ListeMarquesComponent,
        UpdateMarqueComponent,
        RegisterComponent,
        VerifEmailComponent], providers: [{ provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true }, provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
