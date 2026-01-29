import { Routes } from '@angular/router';
import { LandingPage } from './pages/landing-page/landing-page';
import { Register } from './pages/register/register';
import { Login } from './pages/login/login';
import { Dashboard } from './pages/dashboard/dashboard';
import { Pnf } from './pages/pnf/pnf';

export const routes: Routes = [
    {
        path:"",
        component:LandingPage
    },
    {
        path:"register",
        component:Register
    },
    {
        path:"login",
        component:Login
    },
    {
        path:"dashboard",
        component:Dashboard
    },
    {
        path:"**",
        component:Pnf
    }
];
