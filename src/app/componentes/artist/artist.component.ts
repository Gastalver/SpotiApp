import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {
  public id:string
  constructor(private _activatedRoute:ActivatedRoute) {
    this._activatedRoute.params.subscribe((params)=>{
      this.id= params['id'];
      console.log('Recibido el parámetro: ' + this.id);
    })
  }

  ngOnInit() {
  }

}
