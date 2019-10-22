import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = 'http://localhost:3000';

@Injectable({
    providedIn: 'root' //quando o angular criar esse cara, vai ser no escopo raiz (uma instancia para app toda)
})
export class PhotoService {

    constructor(private http:HttpClient){}

    listFromUser(userName: string){
        return this.http
        .get<any[]>(API + '/flavio/photos');
    }
}