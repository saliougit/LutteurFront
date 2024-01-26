import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    {
        path: 'home',
        loadChildren: () => import('./home/home.module').then((m) => m.HomeModule)
    },
   
    {
        path: '',
        redirectTo: 'home', 
        pathMatch: 'full' 
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }

];
