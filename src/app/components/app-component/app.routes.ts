import { Routes } from '@angular/router';

export const routes: Routes = [ 
    {
      path:'home',
      loadComponent: () => import('../home/home.component').then(c => c.HomeComponent)
    }, 
    {
      path:'refferals',
      loadComponent: () => import('../refferals/refferals.component').then(c => c.RefferalsComponent)
    }, 
    {
      path:'locations',
      loadComponent: () => import('../location/location.component').then(c => c.LocationComponent)
    },
    {
      path:'about-us',
      loadComponent: () => import('../about-us/about-us.component').then(c => c.AboutUsComponent)
    }, 
    {
        path: '',
        redirectTo:'home',
        pathMatch:'full',
    }
    /*
    {
      path: 'login',
      component: LoginComponent // Si no deseas hacer lazy loading del login
    },
    { path: '', redirectTo: '/create', pathMatch: 'full' },
    { path: '**', redirectTo: '/create' }
    */
  ];
  
