import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../services/characters.service';
import { Character} from '../services/character';

@Component({
  selector: 'CharactersComponent',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})

export class CharactersComponent implements OnInit, Character {

  id:number = 0;
  name:string = "";
  image:string = "";
  height:number = 0;
  found: boolean = false;
  arr:any[] = [];

  constructor(private characterService:CharacterService) { 
  }

  ngOnInit(): void {
  }

  buscarPokemon() {

    try {
        this.characterService.getData(this.name).subscribe((data:any) => { 
        
          this.name = data.name;
          this.id = data.id;
          this.height = data.height;
          this.image = data.sprites.front_default;
          this.found = true;
          
          this.arr = [this.id, this.name, this.height];
          
          });
    } catch (e) {
      this.name = "No se encontró pokémon"
    }
    }
}
