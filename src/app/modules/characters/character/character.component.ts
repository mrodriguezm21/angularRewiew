import { Component, OnInit } from '@angular/core';
import { ApiUseService } from 'src/app/services/api-use.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent implements OnInit {
  personajes: any = [];
  constructor(private personaje: ApiUseService) {}

  ngOnInit(): void {
    this.personaje.getChars().subscribe(data => {
      this.personajes = data.results;
      console.log(this.personajes);
    })
  }
}
