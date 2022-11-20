import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlightsRoutingModule } from './flights-routing.module';
import { SearchFlightComponent } from './search-flight/search-flight.component';
import { MaterialModule } from 'src/app/public/material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SearchFlightComponent
  ],
  imports: [
    CommonModule,
    FlightsRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class FlightsModule { }
