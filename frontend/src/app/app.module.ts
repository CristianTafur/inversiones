import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavComponent } from './components/nav/nav.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { FooterComponent } from './components/footer/footer.component';
import { AddProyectoComponent } from './components/add-proyecto/add-proyecto.component';
import { EditProyectoComponent } from './components/edit-proyecto/edit-proyecto.component';
import { ListProyectoComponent } from './components/list-proyecto/list-proyecto.component';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';
import { ServiceService } from '../app/service/service.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CarrouselComponent,
    FooterComponent,
    AddProyectoComponent,
    EditProyectoComponent,
    ListProyectoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot( ROUTES, { useHash: true } ),
    AppRoutingModule
  ],
  providers: [ ServiceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
