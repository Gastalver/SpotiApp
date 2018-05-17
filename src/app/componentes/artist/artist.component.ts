import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from "@angular/router";
import {SpotifyService} from "../../servicios/spotify.service";

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {
  public artista:any = {};
  constructor(private _activatedRoute:ActivatedRoute,
              public _spotifyService:SpotifyService) {
  }

  ngOnInit() {
    this._activatedRoute.params
      .map((params)=>params['id'])
      .subscribe((id)=>{
        this._spotifyService.getArtista(id).subscribe();
        this._spotifyService.getTopTracks(id).subscribe();
    })
  }

}
