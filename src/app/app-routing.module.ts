import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./componentes/home/home.component";
import {SearchComponent} from "./componentes/search/search.component";
import {ArtistComponent} from "./componentes/artist/artist.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent },
  {path: 'search', component: SearchComponent},
  {path: 'artist/:id', component: ArtistComponent},
  {path: '', pathMatch: 'full', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
