import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouteModel } from '../../../models/route.model';
import { FlightModel } from 'src/app/models/flight.model';
import { GeneralData } from '../../../config/general-data';
import { GetFlightService } from '../../../services/models/get-flight.service';
import { GenerateJourneyService } from '../../../services/models/generate-journey.service';

@Component({
  selector: 'app-search-flight',
  templateUrl: './search-flight.component.html',
  styleUrls: ['./search-flight.component.css']
})

export class SearchFlightComponent {
  flightList: FlightModel[] = [];
  form: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private GetFlightService: GetFlightService,
    private GenerateJourneyService: GenerateJourneyService
  ) { }

  ngOnInit(): void {
    this.CreateForm();
    this.flightList = this.GetFlightService.GetFlightList();
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
      this.GenerateJourneyService.GenerateJourneyData();
      error: (error: any) => {
        console.log(GeneralData.ERROR_CONNECTION);
      }
    }
  }

  RecordRouteForm() {
    let route = new RouteModel();
    route.origin = this.form.controls["origin"].value.toUpperCase();
    route.destination = this.form.controls["destination"].value.toUpperCase();
  }
}