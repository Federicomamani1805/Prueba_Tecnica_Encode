import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/Home/Home.component';
import { UserTableComponent } from './Pages/Home/User-table/User-table.component';

export const routes: Routes = [
    {
        path: 'Home', component:HomeComponent,
    },
    {
        path:'User-table', component:UserTableComponent,
    },
    {
        path:'**', redirectTo: 'Home'
    }
];
