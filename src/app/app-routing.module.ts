import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SigninGuard} from './shared/guards/signin.guard';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'login', loadChildren: () => import('./login/login.module').then((m) => m.LoginModule)},
  {path: 'home', loadChildren: () => import('./home/home.module').then((m) => m.HomeModule), canActivate: [SigninGuard]},
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
  // {path: 'home', loadChildren: './home/home.module#HomeModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
