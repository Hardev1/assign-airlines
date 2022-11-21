import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GeneralData } from 'src/app/config/general-data';
import { JsonFlightsModel } from '../models/jsonflights.model';

@Injectable({
    providedIn: 'root'
})
export class GetJSONFlightService {
    url: string = GeneralData.DATA_URL;

    constructor(
        private http: HttpClient,
    ) { }

    GetFlightList(): Observable<JsonFlightsModel[]> {
        return this.http.get<JsonFlightsModel[]>(`${this.url}`)
    }

}