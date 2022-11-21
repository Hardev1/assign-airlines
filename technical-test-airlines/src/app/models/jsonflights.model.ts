import { TransportModel } from "./transport.model";

export class JsonFlightsModel {
    flightCarrier?: string;
    flightNumber?: string;
    departureStation?: string;
    arrivalStation?: string;
    price?: number;
}