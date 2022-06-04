import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Character } from "./character";

@Injectable({
    providedIn:'root'
})

export class CharacterService {
    
    private url:string = "https://pokeapi.co/api/v2/pokemon/";

    constructor(private http: HttpClient){
       
    }

    getData(name:string) {
        return this.http.get(this.url + name);
    }
}
