import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ProblemeComponent } from './probleme/probleme.component';

const routes: Routes = [
  {path:'acceuil', component:AcceuilComponent},
  {path:'probleme', component:ProblemeComponent},
  { path:'', redirectTo:'acceuil', pathMatch:'full'},
  { path:'**', redirectTo:'acceuil', pathMatch:'full'}, //si la route est inexistante rediriger l'utilisateur sur bienvenue
  { path:'#', redirectTo:'probleme', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
