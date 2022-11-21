import { TransportModel } from "./transport.model";

export class JsonFlightsModel {
    flightCarrier?: string | undefined;
    flightNumber?: string   | undefined;
    origin?: string;
    destination?: string;
    price?: number;
}