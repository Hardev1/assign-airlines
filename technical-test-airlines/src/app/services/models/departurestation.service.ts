import { Injectable } from '@angular/core';
import { DepartureStationModel } from 'src/app/models/departure-station.model';
import { FlightModel } from 'src/app/models/flight.model';
import { GetFlightService } from './get-flight.service';
import { GetJSONFlightService } from "../get-json-flight,service";
import { JsonFlightsModel } from 'src/app/models/jsonflights.model';
import { find } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DepartureStationService {
    departureStationList: DepartureStationModel[] = [];
    jsonflightList: JsonFlightsModel[] = [];

    constructor(
        private GetFlightService: GetFlightService,
        private GetJSONFlightService: GetJSONFlightService
    ) { }

    GetDepList(flights: FlightModel[]): DepartureStationModel[] { // Get all the routes that can to do each departureStatioon
        console.log(flights);
        flights.forEach(flight => {
            let departureStation = new DepartureStationModel();

            departureStation.adjacencies = [];
            console.log(this.departureStationList);
            if (flight.destination) {
                departureStation.station = flight.origin;
                console.log(flight.destination);

                console.log(departureStation);
            }

            let isdiffstationandadjacency = flight.origin != flight.destination;
            let thereIsntDepartureStation = this.departureStationList.find(station => departureStation.station === station.station) === undefined;

            if (thereIsntDepartureStation && isdiffstationandadjacency) {
                this.departureStationList.push(departureStation);
            }
            else if (!thereIsntDepartureStation
                && this.departureStationList.find(station => station.adjacencies!.find(adjacency => adjacency === flight.destination))) {
                this.departureStationList[this.departureStationList.indexOf(departureStation)].adjacencies?.push
                    (flight.destination!);
            }
        });
        return this.departureStationList;
    };

}