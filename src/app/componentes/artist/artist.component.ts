import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from "@angular/router";
import {SpotifyService} from "../../servicios/spotify.service";

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {
  // public id:string
  constructor(private _activatedRoute:ActivatedRoute,
              public _spotifyService:SpotifyService) {
  }

  ngOnInit() {
    this._activatedRoute.params
      .map((params)=>params['id'])
      .subscribe((id)=>{
        console.log('Recibido el parámetro: ' + id);
    })
  }

}
