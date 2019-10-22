import { Component, OnInit } from '@angular/core';
import { PhotoService } from './photos/photo/photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit { //interface que obriga voce a especificar o ngOnInit

  photos: any[] = [];
  
  //injecao de dependencias
  constructor(private photoService : PhotoService) {}

  ngOnInit(): void { //angular procura o ngOnInit
    
    this.photoService
      .listFromUser('flavio')
      .subscribe(photos => {
        console.log(photos[0].description)
        this.photos = photos
      });
  }
  
}
