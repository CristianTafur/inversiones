import { Routes } from '@angular/router';

import { AddProyectoComponent } from './components/add-proyecto/add-proyecto.component';
import { EditProyectoComponent } from './components/edit-proyecto/edit-proyecto.component';
import { ListProyectoComponent } from './components/list-proyecto/list-proyecto.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { FooterComponent } from './components/footer/footer.component';

export const ROUTES: Routes = [

    { path: 'add-proyecto', component: AddProyectoComponent },
    { path: 'edit-proyecto', component: EditProyectoComponent },
    { path: 'list-proyecto', component: ListProyectoComponent },
    { path: '', component: CarrouselComponent, pathMatch: 'full' },
    { path: '**', component: CarrouselComponent, pathMatch: 'full' },
    { path: '', component: FooterComponent, pathMatch: 'full' },
    { path: '**', component: FooterComponent, pathMatch: 'full' }

];