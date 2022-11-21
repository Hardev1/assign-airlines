import { TransportModel } from "./transport.model";

export class FlightModel{
    transport?: TransportModel | undefined;
    origin?: string;
    destination?: string;
    price?: number;
}