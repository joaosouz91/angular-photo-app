import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  photos: Object[] = [];
  
  //injecao de dependencias
  constructor(http: HttpClient) {
    //console.log(http);

    http
      .get<Object[]>('http://localhost:3000/flavio/photos')
      .subscribe(photos => {
        console.log(photos)
        this.photos = photos
      });
  }

}
