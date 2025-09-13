import { Routes } from '@angular/router';
import { LoginComponent } from './components/login-component/login-component';
import { FlightFormComponent } from './components/flight-form-component/flight-form-component';
import { authGuard } from './core/guards/auth-guard';


export const routes: Routes = [

    {path : 'login', component: LoginComponent},
    {path : 'flight-form', component: FlightFormComponent, canActivate: [authGuard]},
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', redirectTo: '/login' }
];
