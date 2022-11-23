import { Injectable } from '@angular/core';
import { GetJSONFlightService } from '../get-json-flight,service';
import { TransportModel } from 'src/app/models/transport.model';
import { FlightModel } from 'src/app/models/flight.model';
import { JsonFlightsModel } from 'src/app/models/jsonflights.model';
import { DepartureStationService } from 'src/app/services/models/departurestation.service';
import { DepartureStationModel } from 'src/app/models/departure-station.model';

@Injectable({
    providedIn: 'root'
})
export class GenerateJourneyService {
    transport = new TransportModel();
    flight: FlightModel | undefined = new FlightModel();
    jsonflightList: JsonFlightsModel[] = [];
    flightList: FlightModel[] = [];
    transportList: TransportModel[] = [];
    visited: String[] = [];
    departureList: String[] = [];

    constructor(
        private GetJSONFlightService: GetJSONFlightService,
        private DepartureStationService: DepartureStationService
    ) { }

    GenerateJourneyData(flightList: FlightModel[], origin: string) {
        if (this.visited.includes(origin)) {
            return;
        } else {
            let objOrigin: DepartureStationModel | undefined = this.DepartureStationService.GetDepList(flightList).find(orig => orig.station == origin);
            if (typeof (objOrigin) != 'undefined') {
                this.visited.push(objOrigin.station!)
                objOrigin.adjacencies?.forEach(adjacency => {
                    this.GenerateJourneyData(flightList, adjacency);
                })
            }
        }
    }
}