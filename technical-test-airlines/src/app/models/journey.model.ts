import { FlightModel } from "./flight.model";

export class JourneyModel{
    flights?: FlightModel[];
    origin?: string;
    destination?: string;
    price?: number;
}