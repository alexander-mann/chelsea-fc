import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Data } from './data';

@Injectable()
export class DataService {

  constructor( private http: HttpClient) { }

  getData() {
    return this.http.get<Data[]>( `http://api.football-data.org/v2/teams/61`, { 
      headers: new HttpHeaders().set( 'X-Auth-Token', '68b65c34e4d34ab8b033da0c58296748' )
    } )
  }
}
