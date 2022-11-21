

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RouteModel } from '../../../models/route.model';
import { GeneralData } from '../../../config/general-data';
import { FlightModel } from 'src/app/models/flight.model';
// import { InfoComponent } from '../../shared/components/modals/info/info.component';
// import { UserCredentialsModel } from '../../../models/sesion/user-credentials.models';
// import { MD5 } from 'crypto-js';
// import { SecurityService } from 'src/app/services/shared/security.service';
// import { RolModel } from '../../shared/modelos/rol.model';
import { GetFlightService } from '../../../services/get-flight,service';
import { TransportModel } from 'src/app/models/transport.model';
import { JsonFlightsModel } from 'src/app/models/jsonflights.model';
// import { LocalStorageService } from 'src/app/services/shared/local-storage.service';

@Component({
  selector: 'app-search-flight',
  templateUrl: './search-flight.component.html',
  styleUrls: ['./search-flight.component.css']
})
export class SearchFlightComponent {
  transport = new TransportModel();
  jsonflightList: JsonFlightsModel[] = [];
  flightList: FlightModel[] = [];
  transportList: TransportModel[] = [];
  form: FormGroup = new FormGroup({
  });
  hide: boolean = true;
  checkToken: any;

  constructor(
    private fb: FormBuilder,
    private GetFlightService: GetFlightService
  ) { }

  ngOnInit(): void {
    this.CreateForm();
    this.GetFlightList();
    /*console.log(this.flightList);
    console.log(typeof this.flightList);*/
  }

  CreateForm() {
    this.form = this.fb.group({
      origin: [
        'MZL',
        [
          Validators.required,
          Validators.minLength(GeneralData.ROUTE_VALID_LENGHT),
          Validators.maxLength(GeneralData.ROUTE_VALID_LENGHT)
        ],
      ],
      destination: [
        'BCN',
        [
          Validators.required,
          Validators.minLength(GeneralData.ROUTE_VALID_LENGHT),
          Validators.maxLength(GeneralData.ROUTE_VALID_LENGHT)
        ],
      ]
    });
  }

  get GetForm() {
    return this.form.controls;
  }

  SearchRoute() {
    if (!this.form.invalid) {
      this.RecordRouteForm();
      this.GenerateJourneyData();
      error: (error: any) => {
        console.log('Error al conectar con el backend');
      }
    }
  }

  RecordRouteForm() {
    let route = new RouteModel();
    route.origin = this.form.controls["origin"].value.toUpperCase();
    route.destination = this.form.controls["destination"].value.toUpperCase();
    console.log(route);
  }

  GenerateJourneyData() {
    console.log(this.jsonflightList);
    this.jsonflightList.forEach(jsonflight => {
      
      this.transport.flightCarrier = jsonflight.flightCarrier,
      this.transport.flightNumber = jsonflight.flightNumber;
      
      this.transportList.push(this.transport);
    });
    console.log(this.jsonflightList);

    for (let i = 0; i < this.transportList.length; i++) {
      let flight = new FlightModel();
      flight.destination = this.jsonflightList[i].departureStation,
      flight.origin = this.jsonflightList[i].arrivalStation,

      console.log(this.transport.flightCarrier);
      console.log(this.transport.flightNumber);
      
      flight.transport!.flightCarrier = this.transport.flightCarrier,
      flight.transport!.flightNumber = this.transport.flightNumber,
      flight.price = this.jsonflightList[i].price;

      this.jsonflightList.push(flight)
    }
  }

  GetFlightList() {
    this.GetFlightService.GetFlightList().subscribe({
      next: (jsonflights: JsonFlightsModel[]) => {
        this.jsonflightList = jsonflights;

        let flight = new FlightModel();
        let transport = new TransportModel();
        jsonflights.forEach(jsonflight => {
          
          flight.destination = jsonflight.departureStation,
          flight.origin = jsonflight.arrivalStation,
          flight.price = jsonflight.price,
          transport.flightCarrier = jsonflight.flightCarrier,
          transport.flightNumber = jsonflight.flightNumber,
          flight.transport = transport
          this.flightList.push(flight);
        });
        console.log(this.flightList);
        
      }
    });
  }
}