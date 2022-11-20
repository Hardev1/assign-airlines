import { TransportModel } from "./transport.model";

export class FlightModel{
    transport?: TransportModel;
    origin?: string;
    destination?: string;
    price?: number;
}