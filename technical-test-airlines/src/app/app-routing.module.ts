import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchFlightComponent } from './modules/flights/search-flight/search-flight.component';
import { NotFoundComponent } from './public/errors/not-found/not-found.component';
import { HomeComponent } from './public/template/home/home.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/home"
  },
  {
    path: "flights",
    loadChildren: () => import('./modules/flights/flights.module').then(x => x.FlightsModule)
  },
  {
    path: "**",
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
