import { Injectable } from '@angular/core';
import { GetJSONFlightService } from '../get-json-flight,service';
import { TransportModel } from 'src/app/models/transport.model';
import { FlightModel } from 'src/app/models/flight.model';
import { JsonFlightsModel } from 'src/app/models/jsonflights.model';

@Injectable({
    providedIn: 'root'
})
export class GetFlightService {
    transport = new TransportModel();
    jsonflightList: JsonFlightsModel[] = [];
    flightList: FlightModel[] = [];
    transportList: TransportModel[] = [];

    constructor(
        private GetJSONFlightService: GetJSONFlightService
    ) { }

    GetFlightList(): FlightModel[] {
        this.GetJSONFlightService.GetFlightList().subscribe({
            next: (jsonflights: JsonFlightsModel[]) => {
                this.jsonflightList = jsonflights;

                jsonflights.forEach(jsonflight => {
                    let flight = new FlightModel();
                    let transport = new TransportModel();
                    flight.destination = jsonflight.departureStation,
                        flight.origin = jsonflight.arrivalStation,
                        flight.price = jsonflight.price,
                        transport.flightCarrier = jsonflight.flightCarrier,
                        transport.flightNumber = jsonflight.flightNumber,
                        flight.transport = transport
                    this.flightList.push(flight);
                });
                }
            
        });
        return this.flightList;
    }

}