import { Injectable } from '@angular/core';
import { GetJSONFlightService } from '../get-json-flight,service';
import { TransportModel } from 'src/app/models/transport.model';
import { FlightModel } from 'src/app/models/flight.model';
import { JsonFlightsModel } from 'src/app/models/jsonflights.model';

@Injectable({
    providedIn: 'root'
})
export class GenerateJourneyService {
    transport = new TransportModel();
    jsonflightList: JsonFlightsModel[] = [];
    flightList: FlightModel[] = [];
    transportList: TransportModel[] = [];

    constructor(
        private GetJSONFlightService: GetJSONFlightService
    ) { }

    GenerateJourneyData() {

    }

}